"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMessage = 'Model without available fields for serialization. Did you miss Field()?';
var NoFieldsError = /** @class */ (function (_super) {
    __extends(NoFieldsError, _super);
    function NoFieldsError(message) {
        if (message === void 0) { message = defaultErrorMessage; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = 'NoFieldsError';
        return _this;
    }
    return NoFieldsError;
}(Error));
exports.NoFieldsError = NoFieldsError;
