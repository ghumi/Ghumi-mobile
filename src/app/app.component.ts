import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { LabelPage } from '../pages/label/label';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any, labelString: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private imageLoaderConfig: ImageLoaderConfig) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, labelString: ''},
      { title: 'Review', component: LabelPage, labelString: 'review' },
      { title: 'Catatan', component: LabelPage, labelString: 'catatan' },
      { title: 'Share', component: LabelPage, labelString: 'sharing' },
      { title: 'Tekno', component: LabelPage, labelString: 'tekno' },
      { title: 'Entertainment', component: LabelPage, labelString: 'entertainment' },
      { title: 'Fiksi', component: LabelPage, labelString: 'Fiksi' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.imageLoaderConfig.enableDebugMode();
      this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
      this.imageLoaderConfig.setFallbackUrl('assets/imgs/default-img.jpg');
      this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
  
      window["plugins"].OneSignal
        .startInit("91d7af9f-0011-416f-8acb-301167eee0ac", "493427328186")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {label:page.labelString});
  }
}

