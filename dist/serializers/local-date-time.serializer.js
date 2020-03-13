"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalDateTimeSerializer = /** @class */ (function () {
    function LocalDateTimeSerializer() {
    }
    LocalDateTimeSerializer.prototype.serialize = function (dateTime) {
        var timezoneOffset = new Date().getTimezoneOffset() * 60000;
        var localIsoString = new Date(dateTime.getTime() - timezoneOffset).toISOString();
        return localIsoString.slice(0, -1);
    };
    LocalDateTimeSerializer.prototype.deserialize = function (value) {
        return new Date(value);
    };
    return LocalDateTimeSerializer;
}());
exports.LocalDateTimeSerializer = LocalDateTimeSerializer;
