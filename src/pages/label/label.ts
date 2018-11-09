import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  nextPageToken: string;
  posts: any[];

  constructor(
    public constants:ConstantsProvider, 
    public http: Http, 
    public navCtrl: NavController, 
    public restProvider: RestProvider,
    private imageLoader: ImageLoader,
    public navParams: NavParams) {
    
    http.get('https://www.googleapis.com/blogger/v3/blogs/' + 
              constants.getBlogId() + '/posts?labels=' + 
              navParams.get('label') + '&key=' + 
              constants.getApiKey())
    .subscribe(response => {
      let data = response.json();
      this.title = 'ghumi.id - ' + navParams.get('label').toLocaleUpperCase( );
      this.nextPageToken = data.nextPageToken;
      this.posts = this.restructurePost(data.items);
    });
  }
  
  openPost(post) {
    this.navCtrl.push(PostPage, {post:post});
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
