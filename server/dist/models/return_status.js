"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Success = void 0;
var Success = /** @class */ (function () {
    function Success(details) {
        this.status = "success";
        this.details = details;
    }
    return Success;
}());
exports.Success = Success;
var Error = /** @class */ (function () {
    function Error(message) {
        this.status = "error";
        this.details = {
            "error": message
        };
    }
    return Error;
}());
exports.Error = Error;
