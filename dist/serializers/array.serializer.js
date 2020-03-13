"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArraySerializer = /** @class */ (function () {
    function ArraySerializer(serializer) {
        this.serialize = function (model) { return model.map(function (v) { return serializer.serialize(v); }); };
        this.deserialize = function (json) { return (json ? json.map(function (v) { return serializer.deserialize(v); }) : null); };
    }
    return ArraySerializer;
}());
exports.ArraySerializer = ArraySerializer;
