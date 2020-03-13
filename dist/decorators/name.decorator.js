"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_keys_1 = require("../metadata/metadata.keys");
require("reflect-metadata");
var define_field_name_1 = require("../metadata/define-field-name");
function Name(jsonPropertyName) {
    return function (target, propertyKey) {
        var key = propertyKey.toString();
        var jsonKey = jsonPropertyName || key;
        Reflect.defineMetadata(metadata_keys_1.__FIELD_JSON_NAME_METADATA_KEY, jsonKey, target, propertyKey);
        define_field_name_1.defineFieldName(target, key);
    };
}
exports.Name = Name;
