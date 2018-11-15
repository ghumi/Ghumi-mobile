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
import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(constants, http, navCtrl, restProvider, imageLoader, navParams) {
        var _this = this;
        this.constants = constants;
        this.http = http;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.imageLoader = imageLoader;
        this.navParams = navParams;
        this.isSearchbarOpened = false;
        http.get('https://www.googleapis.com/blogger/v3/blogs/' +
            constants.getBlogId() + '/posts/search?q=' +
            navParams.get('searchString') + '&key=' +
            constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.title = 'Search - ' + navParams.get('searchString');
            _this.nextPageToken = data.nextPageToken;
            _this.posts = _this.restructurePost(data.items);
        });
    }
    SearchPage.prototype.openPost = function (post) {
        this.navCtrl.push(PostPage, { post: post });
    };
    SearchPage.prototype.restructurePost = function (posts) {
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
    SearchPage.prototype.restructurePostNextPage = function (posts) {
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
    /*
    doInfinite(infiniteScroll) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        this.posts.push( this.getNextPage(this.nextPageToken) );
  
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 1000);
    }
    */
    SearchPage.prototype.doInfinite = function () {
        var _this = this;
        console.log('Begin async operation');
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.posts.concat(_this.getNextPage(_this.nextPageToken, _this.navParams.get('label')));
                console.log(_this.posts);
                console.log('Async operation has ended');
                resolve();
            }, 1000);
        });
    };
    SearchPage.prototype.getNextPage = function (nextToken, label) {
        var _this = this;
        this.http.get('https://www.googleapis.com/blogger/v3/blogs/' +
            this.constants.getBlogId() + '/posts?labels=' +
            label + '&pageToken=' +
            nextToken + '&key=' + this.constants.getApiKey())
            .subscribe(function (response) {
            var data = response.json();
            _this.nextPageToken = data.nextPageToken;
            return _this.restructurePostNextPage(data.items);
        });
    };
    SearchPage.prototype.clearCache = function (refresher) {
        this.imageLoader.clearCache();
        refresher.complete();
    };
    SearchPage.prototype.onImageLoad = function (event) {
        console.log('image ready!');
    };
    SearchPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [ConstantsProvider,
            Http,
            NavController,
            RestProvider,
            ImageLoader,
            NavParams])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=search.js.map