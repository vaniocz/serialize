"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var __1 = require("..");
function deserializeOperator(modelClass) {
    return operators_1.map(function (json) { return __1.deserialize(json, modelClass); });
}
exports.deserializeOperator = deserializeOperator;
function deserializeAllOperator(modelClass) {
    return operators_1.map(function (json) { return json.map(function (item) { return __1.deserialize(item, modelClass); }); });
}
exports.deserializeAllOperator = deserializeAllOperator;
