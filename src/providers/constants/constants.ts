import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantsProvider {

  private url = 'http://www.ghumi.id/';
  private apiKey = 'AIzaSyCZWqskZe-CGH73-Xv6LJz0-LmHdLIpl4g';
  private blogId = '9096603620736148163'

  constructor(public http: HttpClient) {
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
