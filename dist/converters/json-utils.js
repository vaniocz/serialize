"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_utils_1 = require("../serializers/field.utils");
function parseJsonPropertyName(fullName) {
    return fullName.split('.');
}
exports.parseJsonPropertyName = parseJsonPropertyName;
function setPropertyToJson(json, propertyAddress, value) {
    var _a = reduceAddress(json, propertyAddress), reduce = _a.reduce, lastAddress = _a.lastAddress;
    if (lastAddress && value !== undefined) {
        reduce[lastAddress] = value;
    }
    return json;
}
exports.setPropertyToJson = setPropertyToJson;
function getPropertyOfJson(json, propertyAddress) {
    var _a = reduceAddress(json, propertyAddress), reduce = _a.reduce, lastAddress = _a.lastAddress;
    var value = reduce[field_utils_1.ifPresentGet(lastAddress, '')(lastAddress)];
    return field_utils_1.ifPresentGet(value, null)(value);
}
exports.getPropertyOfJson = getPropertyOfJson;
function reduceAddress(json, propertyAddress) {
    var copyOfAddress = propertyAddress.map(function (v) { return '' + v; });
    var lastAddress = copyOfAddress.pop() || '';
    var reduce = copyOfAddress.reduce(function (pV, cV) {
        if (pV[cV] === undefined) {
            pV[cV] = {};
        }
        return pV[cV];
    }, json);
    return { lastAddress: lastAddress, reduce: reduce };
}
