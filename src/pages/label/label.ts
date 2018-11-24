import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { SearchPage } from '../search/search';

import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../../pages/post/post';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-label',
  templateUrl: 'label.html',
})
export class LabelPage {
  title: string;
  label: string;
  nextPageToken: string;
  posts: any[];

  public isSearchbarOpened = false;

  constructor(
    public constants:ConstantsProvider, 
    public http: Http, 
    public navCtrl: NavController, 
    private inAppBrowser: InAppBrowser,
    private themeableBrowser: ThemeableBrowser, 
    private socialSharing: SocialSharing,
    public restProvider: RestProvider,
    private imageLoader: ImageLoader,
    public navParams: NavParams) {
    
    http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
              constants.getBlogId() + '/posts?labels=' + 
              navParams.get('label') + '&key=' + 
              constants.getApiKey())
    .subscribe(response => {
      let data = response.json();
      this.title = 'ghumi.id | ' + navParams.get('label').toLocaleUpperCase( ); 
      this.label = navParams.get('label').toLocaleUpperCase( );
      this.nextPageToken = data.nextPageToken;
      this.posts = this.restructurePostLabel(data.items);
    });
  }

  onSearch(event){ 
    console.log(event.target.value);
    this.isSearchbarOpened = false;
    this.navCtrl.push(SearchPage, {searchString:event.target.value})
  }
  
  openPostLabel(post) {
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
    var options: ThemeableBrowserOptions = {
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

    browser.on('sharePressed').subscribe(
      (e) => {
        this.socialSharing.share(e.url)
      },
      err => {
          console.log("InAppBrowser loadstart Event Error: " + err);
      }
    );
    
  }

  restructurePostLabel(posts){
    const parser = new DOMParser();
    for (let post of posts) {
      const html = parser.parseFromString(post.content, 'text/html');
      const img = html.querySelector('img');
      const url = img ? img.src : '';
      
      post.imageurl = url;
    }
    
    console.log(posts);
    return posts;
  }

  restructurePostNextPageLabel(posts){
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

  doInfiniteLabel(): Promise<any> {
    console.log('Begin async operation doInfiniteLabel');

    return new Promise((resolve) => {
      setTimeout(() => {
        this.posts.concat( this.getNextPageLabel(this.nextPageToken, this.navParams.get('label')) );
        console.log(this.posts);

        console.log('Async operation has ended');
        resolve();
      }, 1000);
    })
  }

  getNextPageLabel(nextToken:string, label: string){
    this.http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
                    this.constants.getBlogId() + '/posts?labels=' + 
                    label + '&pageToken=' +
                    nextToken + '&key=' + this.constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.nextPageToken = data.nextPageToken;
        return this.restructurePostNextPageLabel(data.items);
      });
  }

  clearCacheLabel(refresher){
    this.imageLoader.clearCache();
    refresher.complete();    
  }

  onImageLoadLabel(event){
    console.log('image ready!');
  }
}
