"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var serializers_1 = require("../serializers");
var model_metadata_serializer_1 = require("../serializers/model-metadata.serializer");
function serialize(model, additionalInfo) {
    var modelPrototype = Object.getPrototypeOf(model);
    var constructor = modelPrototype.constructor;
    if (serializers_1.SerializersFactory.instance.isSerializerPresent(constructor)) {
        var serializer = serializers_1.SerializersFactory.instance.getSerializer(constructor);
        if (serializer === undefined) {
            throw new Error("Couldn't find serializer for a type " + constructor.name);
        }
        return serializer.serialize(model, additionalInfo) || {};
    }
    else {
        serializers_1.SerializersFactory.instance.registerSerializer(constructor, new model_metadata_serializer_1.ModelMetadataSerializer(constructor));
        return serialize(model, additionalInfo);
    }
}
exports.serialize = serialize;
