var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConstantsProvider = /** @class */ (function () {
    function ConstantsProvider(http) {
        this.http = http;
        this.url = 'http://www.ghumi.id/';
        this.apiKey = 'XXX';
        this.blogId = '9096603620736148163';
        console.log('Hello ConstantsProvider Provider');
    }
    ConstantsProvider.prototype.getUrl = function () {
        return '' + this.url;
    };
    ConstantsProvider.prototype.getApiKey = function () {
        return '' + this.apiKey;
    };
    ConstantsProvider.prototype.getBlogId = function () {
        return '' + this.blogId;
    };
    ConstantsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ConstantsProvider);
    return ConstantsProvider;
}());
export { ConstantsProvider };
//# sourceMappingURL=constants.js.map