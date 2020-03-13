"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_keys_1 = require("./metadata.keys");
function getMetadata(prototype) {
    var properties = Array.from((Reflect.getMetadata(metadata_keys_1.__FIELD_CLASS_FIELDS_METADATA_KEY, prototype) || new Set()).values());
    return properties.filter(isMetadataPresentForField(prototype)).map(function (v) { return getMetadataFromField(prototype, v); });
}
exports.getMetadata = getMetadata;
function isMetadataPresentForField(target) {
    return function (propertyKey) {
        return Reflect.hasMetadata(metadata_keys_1.__FIELD_JSON_NAME_METADATA_KEY, target, propertyKey) &&
            Reflect.hasMetadata(metadata_keys_1.__FIELD_SERIALIZER_METADATA_KEY, target, propertyKey);
    };
}
function getMetadataFromField(target, modelPropertyKey) {
    var jsonPropertyName = Reflect.getMetadata(metadata_keys_1.__FIELD_JSON_NAME_METADATA_KEY, target, modelPropertyKey);
    var serializer = Reflect.getMetadata(metadata_keys_1.__FIELD_SERIALIZER_METADATA_KEY, target, modelPropertyKey);
    return {
        modelPropertyName: modelPropertyKey,
        jsonPropertyName: jsonPropertyName,
        serializer: serializer
    };
}
