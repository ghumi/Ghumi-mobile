import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConstantsProvider {

  private url = 'http://www.ghumi.id/';
  private apiKey = 'AIzaSyCZWqskZe-CGH73-Xv6LJz0-LmHdLIpl4g';
  private blogId = '9096603620736148163';

  constructor(
    public http: Http, 
    public httpClient: HttpClient) {
    console.log('Hello ConstantsProvider Provider');
  }

  getUrl() {
    return '' + this.url;
  }

  getApiKey() {
    return '' + this.apiKey;
  }

  getBlogId() {
    return '' + this.blogId; 
  }
}
