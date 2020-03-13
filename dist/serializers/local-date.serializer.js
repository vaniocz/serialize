"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripIsoTime(isoString) {
    return isoString.replace(/T.*/, '');
}
var LocalDateSerializer = /** @class */ (function () {
    function LocalDateSerializer() {
    }
    LocalDateSerializer.prototype.serialize = function (date) {
        var timezoneOffset = new Date().getTimezoneOffset() * 60000;
        var localIsoString = new Date(date.getTime() - timezoneOffset).toISOString();
        return stripIsoTime(localIsoString);
    };
    LocalDateSerializer.prototype.deserialize = function (value) {
        return new Date(stripIsoTime(value));
    };
    return LocalDateSerializer;
}());
exports.LocalDateSerializer = LocalDateSerializer;
