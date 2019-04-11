/**
 * =============================================================================
 *
 * Creted by anele on
 *
 * =============================================================================
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';


import { LoginService } from './login.service';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  loading : Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl :LoadingController, private  alertCtrl : AlertController,
    private service : LoginService) {
  }


  showLoading () {
    this.loading = this.loadingCtrl.create({ content : 'Please wait ...', dismissOnPageChange : true });
    this.loading.present();
  }


  dismissLoading() {this.loading.dismiss().catch( () => {} );}


  showError(text : any) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({ title : 'Failed ' + text, subTitle : text,buttons : ['OK'] });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  doLogin() {
    this.navCtrl.setRoot('Menu');
  }

  userSignUp() {
    this.navCtrl.setRoot('Register');
  }

}
