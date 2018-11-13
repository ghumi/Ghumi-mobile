import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
//import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicImageLoader } from 'ionic-image-loader';

import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { LabelPage } from '../pages/label/label';
import { SearchPage } from '../pages/search/search';

import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';

import { RestProvider } from '../providers/rest/rest';
import { ConstantsProvider } from '../providers/constants/constants';

@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    ConstantsProvider
  ]
})
export class AppModule {}
