"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name_decorator_1 = require("./name.decorator");
var type_decorator_1 = require("./type.decorator");
var metadata_keys_1 = require("../metadata/metadata.keys");
function Field(config) {
    return combine(config && config.jsonPropertyName, config && config.serializer);
}
exports.Field = Field;
function combine(name, serializer) {
    return function (target, key) {
        if (!Reflect.hasMetadata(metadata_keys_1.__FIELD_JSON_NAME_METADATA_KEY, target, key)) {
            name_decorator_1.Name(name)(target, key);
        }
        if (!Reflect.hasMetadata(metadata_keys_1.__FIELD_SERIALIZER_METADATA_KEY, target, key)) {
            type_decorator_1.Type(serializer)(target, key);
        }
    };
}
