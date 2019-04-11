/**
 * =============================================================================
 *
 * Creted by anele on
 *
 * =============================================================================
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';

import { RegisterService } from './register.service';


@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  loading : Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl :LoadingController, private  alertCtrl : AlertController, private service : RegisterService) {
  }

  showLoading () {
    this.loading = this.loadingCtrl.create({
      content : 'Please wait ...',
      dismissOnPageChange : true
    });
    this.loading.present()
  }


  dismissLoading() {this.loading.dismiss().catch( () => {} );}


  showError(text : any) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({ title : 'Failed ' + text, subTitle : text,buttons : ['OK'] });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
