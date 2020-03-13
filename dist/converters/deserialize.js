"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializers_1 = require("../serializers");
var model_metadata_serializer_1 = require("../serializers/model-metadata.serializer");
function deserialize(jsonOrConstructor, constructor, additionalInfo) {
    if (typeof jsonOrConstructor === 'function') {
        return function (json) { return deserialize(json, jsonOrConstructor); };
    }
    if (constructor === undefined) {
        throw new Error('Please provide a constructor');
    }
    if (serializers_1.SerializersFactory.instance.isSerializerPresent(constructor)) {
        var serializer = serializers_1.SerializersFactory.instance.getSerializer(constructor);
        if (serializer === undefined) {
            throw new Error("Couldn't find a serializer for a type " + constructor.name);
        }
        return serializer.deserialize(jsonOrConstructor, additionalInfo);
    }
    else {
        serializers_1.SerializersFactory.instance.registerSerializer(constructor, new model_metadata_serializer_1.ModelMetadataSerializer(constructor));
        return deserialize(jsonOrConstructor, constructor, additionalInfo);
    }
}
exports.deserialize = deserialize;
