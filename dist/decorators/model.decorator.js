"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializers_1 = require("../serializers");
var model_metadata_serializer_1 = require("../serializers/model-metadata.serializer");
function Model(serializer) {
    return function (target) {
        serializers_1.SerializersFactory.instance.registerSerializer(target, serializer || new model_metadata_serializer_1.ModelMetadataSerializer(target));
    };
}
exports.Model = Model;
