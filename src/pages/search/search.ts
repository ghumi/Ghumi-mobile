import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  title: string;
  nextPageToken: string;
  posts: any[];

  public isSearchbarOpened = false;
  public isPostEmpty = true;
  public postMessage = 'Searching.....';

  constructor(
    public constants:ConstantsProvider, 
    public http: Http, 
    public navCtrl: NavController, 
    public restProvider: RestProvider,
    private imageLoader: ImageLoader,
    private inAppBrowser: InAppBrowser,
    private themeableBrowser: ThemeableBrowser, 
    private socialSharing: SocialSharing,
    public navParams: NavParams) {
    
      http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
                constants.getBlogId() + '/posts/search?q=' + 
                navParams.get('searchString') + '&key=' + 
                constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.title = 'Search - ' + navParams.get('searchString');
        if(data.items){
          this.isPostEmpty = false;
          this.nextPageToken = data.nextPageToken;
          this.posts = this.restructurePost(data.items);
        }
      });
    }

    onSearch(event){
      this.posts = null;
      this.isPostEmpty = true;
      console.log(event.target.value);
      this.isSearchbarOpened = false;
      this.http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
                    this.constants.getBlogId() + '/posts/search?q=' + 
                    event.target.value + '&key=' + 
                    this.constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.title = 'Search - ' + event.target.value;
        if(data.items){
          this.isPostEmpty = false;
          this.nextPageToken = data.nextPageToken;
          this.posts = this.restructurePost(data.items);
        }else{
          this.isPostEmpty = true;
          this.postMessage = 'Search Not Found';
        }
      });
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
  
    restructurePost(posts){
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
  
    doInfinite(): Promise<any> {
      console.log('Begin async operation');
  
      return new Promise((resolve) => {
        setTimeout(() => {
          this.posts.concat( this.getNextPage(this.nextPageToken, this.navParams.get('label')) );
          console.log(this.posts);
  
          console.log('Async operation has ended');
          resolve();
        }, 1000);
      })
    }
  
    getNextPage(nextToken:string, label: string){
      this.http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
                      this.constants.getBlogId() + '/posts?labels=' + 
                      label + '&pageToken=' +
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
