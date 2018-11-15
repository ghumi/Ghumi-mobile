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
import { NavController, Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';
import { SearchPage } from '../search/search';
import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';
import { AdMobFree } from '@ionic-native/admob-free';
var HomePage = /** @class */ (function () {
    function HomePage(constants, http, navCtrl, imageLoader, restProvider, admobFree, platform) {
        var _this = this;
        this.constants = constants;
        this.http = http;
        this.navCtrl = navCtrl;
        this.imageLoader = imageLoader;
        this.restProvider = restProvider;
        this.admobFree = admobFree;
        this.platform = platform;
        this.isSearchbarOpened = false;
        http.get('https://www.googleapis.com/blogger/v3/blogs/byurl?key=' +
            constants.getApiKey() + '&url=' + constants.getUrl())
            .subscribe(function (response) {
            var data = response.json();
            _this.title = 'ghumi.id';
            _this.getPosts(data.posts.selfLink);
        });
        this.getHeadline();
        this.showBanner();
    }
    HomePage.prototype.showBanner = function () {
        if (this.platform.is('cordova')) {
            var bannerConfig = {
                id: 'ca-app-pub-6893166228935188/6053120961',
                isTesting: false,
                autoShow: true
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare()
                .then(function () {
                // banner Ad is ready
                // if we set autoShow to false, then we will need to call the show method here
            })
                .catch(function (e) { return console.log(e); });
        }
        console.log('showBanner');
    };
    HomePage.prototype.openPost = function (post) {
        this.navCtrl.push(PostPage, { post: post });
    };
    HomePage.prototype.onSearch = function (event) {
        console.log(event.target.value);
        this.navCtrl.push(SearchPage, { searchString: event.target.value });
    };
    HomePage.prototype.getHeadline = function () {
        var _this = this;
        this.http.get('https://www.googleapis.com/blogger/v3/blogs/' +
            this.constants.getBlogId() + '/posts?labels=' +
            'breaking' + '&key=' + this.constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.headlines = _this.restructurePost(data.items);
        });
    };
    HomePage.prototype.getPosts = function (url) {
        var _this = this;
        this.http.get(url + '?key=' + this.constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.nextPageToken = data.nextPageToken;
            _this.posts = _this.restructurePost(data.items);
        });
    };
    HomePage.prototype.restructurePost = function (posts) {
        var parser = new DOMParser();
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            var html = parser.parseFromString(post.content, 'text/html');
            var img = html.querySelector('img');
            var url = img ? img.src : '';
            post.imageurl = url;
        }
        return posts;
    };
    HomePage.prototype.restructurePostNextPage = function (posts) {
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
    HomePage.prototype.doInfinite = function () {
        var _this = this;
        console.log('Begin async operation');
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.posts.concat(_this.getNextPage(_this.nextPageToken));
                console.log(_this.posts);
                console.log('Async operation has ended');
                resolve();
            }, 1000);
        });
    };
    HomePage.prototype.getNextPage = function (nextToken) {
        var _this = this;
        this.http.get('https://www.googleapis.com/blogger/v3/blogs/' +
            this.constants.getBlogId() + '/posts?&pageToken=' +
            nextToken + '&key=' + this.constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.nextPageToken = data.nextPageToken;
            return _this.restructurePostNextPage(data.items);
        });
    };
    HomePage.prototype.clearCache = function (refresher) {
        this.imageLoader.clearCache();
        refresher.complete();
    };
    HomePage.prototype.onImageLoad = function (event) {
        console.log('image ready!');
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [ConstantsProvider,
            Http,
            NavController,
            ImageLoader,
            RestProvider,
            AdMobFree,
            Platform])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map