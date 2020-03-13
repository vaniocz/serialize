"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_utils_1 = require("./field.utils");
var PrimitiveSerializer = /** @class */ (function () {
    function PrimitiveSerializer() {
        this.serialize = function (model) { return field_utils_1.ifPresentGet(model, undefined)(model); };
        this.deserialize = function (json) { return field_utils_1.ifPresentGet(json, undefined)(json); };
    }
    return PrimitiveSerializer;
}());
exports.PrimitiveSerializer = PrimitiveSerializer;
