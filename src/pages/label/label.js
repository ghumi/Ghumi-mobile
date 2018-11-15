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
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';
var LabelPage = /** @class */ (function () {
    function LabelPage(constants, http, navCtrl, restProvider, imageLoader, inAppBrowser, navParams) {
        var _this = this;
        this.constants = constants;
        this.http = http;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.imageLoader = imageLoader;
        this.inAppBrowser = inAppBrowser;
        this.navParams = navParams;
        http.get('https://www.googleapis.com/blogger/v3/blogs/' +
            constants.getBlogId() + '/posts?labels=' +
            navParams.get('label') + '&key=' +
            constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.title = 'ghumi.id - ' + navParams.get('label').toLocaleUpperCase();
            _this.nextPageToken = data.nextPageToken;
            _this.posts = _this.restructurePostLabel(data.items);
        });
    }
    LabelPage.prototype.openPostLabel = function (post) {
        console.log('openPostLabel');
        this.navCtrl.push(PostPage, { post: post });
    };
    LabelPage.prototype.openPostURL = function (post) {
        console.log(post.url);
        var options = {
            zoom: 'no'
        };
        // Opening a URL and returning an InAppBrowserObject
        var browser = this.inAppBrowser.create(post.url, '_self', options);
        browser.on;
    };
    LabelPage.prototype.restructurePostLabel = function (posts) {
        var parser = new DOMParser();
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            var html = parser.parseFromString(post.content, 'text/html');
            var img = html.querySelector('img');
            var url = img ? img.src : '';
            post.imageurl = url;
        }
        console.log(posts);
        return posts;
    };
    LabelPage.prototype.restructurePostNextPageLabel = function (posts) {
        var parser = new DOMParser();
        for (var _i = 0, posts_2 = posts; _i < posts_2.length; _i++) {
            var post = posts_2[_i];
            var html = parser.parseFromString(post.content, 'text/html');
            var img = html.querySelector('img');
            var url = img ? img.src : '';
            post.imageurl = url;
            this.posts.push(post);
        }
        console.log(posts);
        return posts;
    };
    LabelPage.prototype.doInfiniteLabel = function () {
        var _this = this;
        console.log('Begin async operation doInfiniteLabel');
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.posts.concat(_this.getNextPageLabel(_this.nextPageToken, _this.navParams.get('label')));
                console.log(_this.posts);
                console.log('Async operation has ended');
                resolve();
            }, 1000);
        });
    };
    LabelPage.prototype.getNextPageLabel = function (nextToken, label) {
        var _this = this;
        this.http.get('https://www.googleapis.com/blogger/v3/blogs/' +
            this.constants.getBlogId() + '/posts?labels=' +
            label + '&pageToken=' +
            nextToken + '&key=' + this.constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.nextPageToken = data.nextPageToken;
            return _this.restructurePostNextPageLabel(data.items);
        });
    };
    LabelPage.prototype.clearCacheLabel = function (refresher) {
        this.imageLoader.clearCache();
        refresher.complete();
    };
    LabelPage.prototype.onImageLoadLabel = function (event) {
        console.log('image ready!');
    };
    LabelPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-label',
            templateUrl: 'label.html',
        }),
        __metadata("design:paramtypes", [ConstantsProvider,
            Http,
            NavController,
            RestProvider,
            ImageLoader,
            InAppBrowser,
            NavParams])
    ], LabelPage);
    return LabelPage;
}());
export { LabelPage };
//# sourceMappingURL=label.js.map