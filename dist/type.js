"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isConstructor(candidate) {
    if (typeof candidate === 'function') {
        return true;
    }
    return false;
}
exports.isConstructor = isConstructor;
