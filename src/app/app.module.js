var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicImageLoader } from 'ionic-image-loader';
import { AdMobFree } from '@ionic-native/admob-free';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LabelPage } from '../pages/label/label';
import { PostPage } from '../pages/post/post';
import { SearchPage } from '../pages/search/search';
import { RestProvider } from '../providers/rest/rest';
import { ConstantsProvider } from '../providers/constants/constants';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                PostPage,
                LabelPage,
                SearchPage
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                HttpModule,
                IonicImageLoader.forRoot(),
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                PostPage,
                LabelPage,
                SearchPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                SocialSharing,
                AdMobFree,
                InAppBrowser,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                RestProvider,
                ConstantsProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map