var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.post = navParams.get('post');
        console.log(this.post.title);
    }
    PostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostPage');
    };
    PostPage.prototype.share = function () {
        this.socialSharing.share(this.post.url)
            .then(function () {
        }).catch(function () {
        });
    };
    PostPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-post',
            templateUrl: 'post.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            SocialSharing])
    ], PostPage);
    return PostPage;
}());
export { PostPage };
//# sourceMappingURL=post.js.map