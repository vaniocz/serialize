"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_metadata_1 = require("../metadata/get-metadata");
var errors_1 = require("../errors");
var json_utils_1 = require("../converters/json-utils");
var field_utils_1 = require("./field.utils");
var ModelMetadataSerializer = /** @class */ (function () {
    function ModelMetadataSerializer(modelConstructor) {
        this.modelConstructor = modelConstructor;
    }
    ModelMetadataSerializer.prototype.deserialize = function (json, additionalInfo) {
        var _this = this;
        var deserializedModel = Object.create(this.modelConstructor.prototype);
        var fields = this.getFieldsMetadata();
        fields.forEach(function (metadata) {
            var address = json_utils_1.parseJsonPropertyName(metadata.jsonPropertyName);
            var jsonValue = json_utils_1.getPropertyOfJson(json, address);
            _this.setValueToModel(deserializedModel, metadata, jsonValue, additionalInfo);
        });
        return deserializedModel;
    };
    ModelMetadataSerializer.prototype.getFieldsMetadata = function () {
        var metadata = get_metadata_1.getMetadata(this.modelConstructor.prototype);
        if (metadata.length === 0) {
            throw new errors_1.NoFieldsError();
        }
        return metadata;
    };
    ModelMetadataSerializer.prototype.setValueToModel = function (model, metadata, jsonValue, additionalInfo) {
        if (field_utils_1.isPresent(jsonValue)) {
            model[metadata.modelPropertyName] = metadata.serializer.deserialize(jsonValue, additionalInfo);
        }
    };
    ModelMetadataSerializer.prototype.serialize = function (model, additionalInfo) {
        var fields = this.getFieldsMetadata();
        return fields.reduce(function (dict, metadata) {
            var modelValue = model[metadata.modelPropertyName];
            if (field_utils_1.isPresent(modelValue)) {
                var address = json_utils_1.parseJsonPropertyName(metadata.jsonPropertyName);
                json_utils_1.setPropertyToJson(dict, address, metadata.serializer.serialize(modelValue, additionalInfo));
            }
            return dict;
        }, {});
    };
    return ModelMetadataSerializer;
}());
exports.ModelMetadataSerializer = ModelMetadataSerializer;
