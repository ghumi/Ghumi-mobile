import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';
import { SearchPage } from '../search/search';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';

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
    public restProvider: RestProvider,
    private imageLoader: ImageLoader,
    private inAppBrowser: InAppBrowser,
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
    console.log('openPostLabel');
    this.navCtrl.push(PostPage, {post:post});
  }

  openPostURL(post){
    console.log(post.url);

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(post.url, '_self', options);

    browser.on;
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
