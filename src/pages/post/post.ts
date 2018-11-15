import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  public post: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private socialSharing: SocialSharing) {
    this.post = navParams.get('post');
    console.log(this.post.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  share(){
    this.socialSharing.share(this.post.url)
    .then(()=>{

    }).catch(()=>{
      
    });
  }

}
