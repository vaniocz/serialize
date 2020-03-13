"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializers_1 = require("../serializers");
var errors_1 = require("../errors");
var metadata_keys_1 = require("../metadata/metadata.keys");
var define_field_name_1 = require("../metadata/define-field-name");
function Type(serializerOrType) {
    return function (target, propertyKey) {
        var key = propertyKey.toString();
        var serializer = getSerializerFromParams(Reflect.getMetadata('design:type', target, propertyKey), key, serializerOrType);
        Reflect.defineMetadata(metadata_keys_1.__FIELD_SERIALIZER_METADATA_KEY, serializer, target, key);
        define_field_name_1.defineFieldName(target, key);
    };
}
exports.Type = Type;
function getSerializerFromParams(defaultType, propertyName, serializerOrType) {
    if (typeof serializerOrType === 'object') {
        return serializerOrType;
    }
    return getSerializerForType(serializerOrType || defaultType, propertyName);
}
/**
 * @throws {NoSerializerError} if serializer for this type not found
 * @throws {Error} if type was undefined
 * @param type Model type
 */
function getSerializerForType(type, propertyName) {
    if (type === undefined) {
        throw new Error('Count find type for field: ' + propertyName);
    }
    var serializer = serializers_1.SerializersFactory.instance.getSerializer(type);
    if (serializer === undefined) {
        throw new errors_1.NoSerializerError(propertyName);
    }
    return serializer;
}
