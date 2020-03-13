"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var primitive_serializer_1 = require("./primitive.serializer");
var date_serializer_1 = require("./date.serializer");
var instance;
var SerializersFactory = /** @class */ (function () {
    // noinspection JSUnusedLocalSymbols
    function SerializersFactory() {
        this.serializersMap = new Map();
    }
    Object.defineProperty(SerializersFactory, "instance", {
        get: function () {
            if (!instance) {
                instance = new SerializersFactory();
                instance.registerSerializer(Number, new primitive_serializer_1.PrimitiveSerializer());
                instance.registerSerializer(String, new primitive_serializer_1.PrimitiveSerializer());
                instance.registerSerializer(Boolean, new primitive_serializer_1.PrimitiveSerializer());
                instance.registerSerializer(Date, new date_serializer_1.DateSerializer());
            }
            return instance;
        },
        enumerable: true,
        configurable: true
    });
    SerializersFactory.prototype.getSerializer = function (type) {
        return this.serializersMap.get(type);
    };
    SerializersFactory.prototype.registerSerializer = function (type, serializer) {
        if (!this.serializersMap.has(type)) {
            this.serializersMap.set(type, serializer);
        }
    };
    SerializersFactory.prototype.isSerializerPresent = function (type) {
        return this.serializersMap.has(type);
    };
    return SerializersFactory;
}());
exports.SerializersFactory = SerializersFactory;
