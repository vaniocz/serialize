"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateSerializer = /** @class */ (function () {
    /**
     * @param initializer Function for creating date from json, {@link Date} by default
     */
    function DateSerializer(initializer) {
        this.serialize = function (model) { return model.toISOString(); };
        this.deserialize = function (json) { return (initializer ? initializer(json) : new Date(json)) || null; };
    }
    return DateSerializer;
}());
exports.DateSerializer = DateSerializer;
