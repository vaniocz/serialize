"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_keys_1 = require("./metadata.keys");
function defineFieldName(target, propertyName) {
    var currentSet = Reflect.getMetadata(metadata_keys_1.__FIELD_CLASS_FIELDS_METADATA_KEY, target);
    if (currentSet === undefined) {
        var fields = new Set([propertyName.toString()]);
        Reflect.defineMetadata(metadata_keys_1.__FIELD_CLASS_FIELDS_METADATA_KEY, fields, target);
    }
    else {
        currentSet.add(propertyName.toString());
    }
}
exports.defineFieldName = defineFieldName;
