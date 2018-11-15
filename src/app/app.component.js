var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { LabelPage } from '../pages/label/label';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, imageLoaderConfig) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.imageLoaderConfig = imageLoaderConfig;
        this.rootPage = HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage, labelString: '' },
            { title: 'Review', component: LabelPage, labelString: 'review' },
            { title: 'Catatan', component: LabelPage, labelString: 'catatan' },
            { title: 'Share', component: LabelPage, labelString: 'sharing' },
            { title: 'Tekno', component: LabelPage, labelString: 'tekno' },
            { title: 'Entertainment', component: LabelPage, labelString: 'entertainment' },
            { title: 'Fiksi', component: LabelPage, labelString: 'Fiksi' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.imageLoaderConfig.enableDebugMode();
            _this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
            _this.imageLoaderConfig.setFallbackUrl('assets/imgs/default-img.jpg');
            _this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
            _this.statusBar.styleDefault();
            _this.splashScreen.show();
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit("91d7af9f-0011-416f-8acb-301167eee0ac", "493427328186")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, { label: page.labelString });
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, ImageLoaderConfig])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map