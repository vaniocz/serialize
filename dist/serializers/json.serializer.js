"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonSerializer = /** @class */ (function () {
    function JsonSerializer() {
    }
    JsonSerializer.prototype.serialize = function (value) {
        return value;
    };
    JsonSerializer.prototype.deserialize = function (json) {
        return json;
    };
    return JsonSerializer;
}());
exports.JsonSerializer = JsonSerializer;
