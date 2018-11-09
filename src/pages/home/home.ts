import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';

import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ImageLoader } from 'ionic-image-loader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  nextPageToken: string;
  posts: any[];
  headlines: any[];

  constructor(
    public constants:ConstantsProvider, 
    public http: Http, 
    public navCtrl: NavController, 
    private imageLoader: ImageLoader,
    public restProvider: RestProvider) {
    http.get('https://www.googleapis.com/blogger/v3/blogs/byurl?key=' + 
              constants.getApiKey() + '&url=' + constants.getUrl())
    .subscribe(response => {
      let data = response.json();
      this.title = 'ghumi.id';
      this.getPosts(data.posts.selfLink);
      this.getHeadline();
    });
  }
  
  openPost(post) {
    this.navCtrl.push(PostPage, {post:post})
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
