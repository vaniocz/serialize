"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function ifPresentGet(presentResult, notPresentResult) {
    return function (obj) { return (isPresent(obj) ? presentResult : notPresentResult); };
}
exports.ifPresentGet = ifPresentGet;
