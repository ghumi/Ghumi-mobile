import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular'; 
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';
import { SearchPage } from '../search/search';

import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  nextPageToken: string;
  posts: any[];
  headlines: any[];

  public isSearchbarOpened = false;

  constructor(
    public constants:ConstantsProvider, 
    public http: Http, 
    public navCtrl: NavController, 
    private imageLoader: ImageLoader,
    public restProvider: RestProvider
    , private admobFree: AdMobFree,
    private inAppBrowser: InAppBrowser,
    private themeableBrowser: ThemeableBrowser, 
    private socialSharing: SocialSharing,
    private platform: Platform
    ) {
    http.get('https://www.googleapis.com/blogger/v3/blogs/byurl?key=' + 
              constants.getApiKey() + '&url=' + constants.getUrl())
    .subscribe(response => {
      let data = response.json();
      this.title = 'ghumi.id';
      this.getPosts(data.posts.selfLink);
    });
    this.getHeadline();
    this.showBanner();
  }

  showBanner(){
    if(this.platform.is('cordova')){
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-6893166228935188/6053120961',
        isTesting: false,
        autoShow: true
        };
      this.admobFree.banner.config(bannerConfig);
      
      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
    }
    console.log('showBanner');
  }
  
  openPost(post) {
    //this.openPostPage(post);
    //this.openPostInAppBrowser(post);
    this.openPostThemeBrowser(post);
  }
  
  openPostPage(post) {
    this.navCtrl.push(PostPage, {post:post});
  }

  openPostInAppBrowser(post){
    console.log(post.url);

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(post.url, '_self', options);

    browser.on;
  }

  openPostThemeBrowser(post){
    const options: ThemeableBrowserOptions = {
      toolbar: {
          height: 56,
          color: '#d0403e'
      },
      title: {
          color: '#ffffffff',
          showPageTitle: true,
          staticText: 'ghumi.id'
      },
      closeButton: {
        wwwImage: 'assets/imgs/close.png',
        align: 'left',
        event: 'closePressed'
      },
      customButtons: [
          {
              wwwImage: 'assets/imgs/share.png',
              align: 'right',
              event: 'sharePressed'
          }
      ],
    };

    const browser: ThemeableBrowserObject = this.themeableBrowser.create(post.url, '_blank', options);

    browser.on('closePressed').subscribe(res => {
      browser.close();
    });

    browser.on('sharePressed').subscribe(res => 
      this.socialSharing.share(post.url)
      .then(()=>{
  
      }).catch(()=>{
        
      })
    );
  }

  onSearch(event){ 
    console.log(event.target.value);
    this.isSearchbarOpened = false;
    this.navCtrl.push(SearchPage, {searchString:event.target.value})
  }

  getHeadline(){
    this.http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
                  this.constants.getBlogId() + '/posts?labels=' + 
                  'breaking' + '&key=' + this.constants.getApiKey())
    .subscribe(response => {
      let data = response.json();
      this.headlines = this.restructurePost(data.items);
    });
  }

  getPosts(url:string) {
    this.http.get(url+'?key='+this.constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.nextPageToken = data.nextPageToken;
        this.posts = this.restructurePost(data.items);
      });
  }

  restructurePost(posts){
    const parser = new DOMParser();
    for (let post of posts) {
      const html = parser.parseFromString(post.content, 'text/html');
      const img = html.querySelector('img');
      const url = img ? img.src : '';
      
      post.imageurl = url;
    }
    
    return posts;
  }

  restructurePostNextPage(posts){
    const parser = new DOMParser();
    for (let post of posts) {
      const html = parser.parseFromString(post.content, 'text/html');
      const img = html.querySelector('img');
      const url = img ? img.src : '';
      
      post.imageurl = url;

      this.posts.push(post);
    }
    
    console.log(posts);
    return posts;
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        this.posts.concat( this.getNextPage(this.nextPageToken) );
        console.log(this.posts);

        console.log('Async operation has ended');
        resolve();
      }, 1000);
    })
  }

  getNextPage(nextToken:string){
    this.http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
                    this.constants.getBlogId() + '/posts?&pageToken=' +
                    nextToken + '&key=' + this.constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.nextPageToken = data.nextPageToken;
        return this.restructurePostNextPage(data.items);
      });
  }

  clearCache(refresher){
    this.imageLoader.clearCache();
    refresher.complete();    
  }

  onImageLoad(event){
    console.log('image ready!');
  }
}
