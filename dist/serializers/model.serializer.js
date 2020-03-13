"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_metadata_serializer_1 = require("./model-metadata.serializer");
/**
 * @deprecated Use {@link ModelMetadataSerializer} instead this one
 */
var ModelSerializer = /** @class */ (function () {
    function ModelSerializer(constructor) {
        this.metadataSerializer = new model_metadata_serializer_1.ModelMetadataSerializer(constructor);
    }
    ModelSerializer.prototype.serialize = function (modelForSerialization, additionalInfo) {
        return this.metadataSerializer.serialize(modelForSerialization, additionalInfo);
    };
    ModelSerializer.prototype.deserialize = function (json, additionalInfo) {
        return this.metadataSerializer.deserialize(json, additionalInfo);
    };
    return ModelSerializer;
}());
exports.ModelSerializer = ModelSerializer;
function model(constructor) {
    return new model_metadata_serializer_1.ModelMetadataSerializer(constructor);
}
exports.model = model;
