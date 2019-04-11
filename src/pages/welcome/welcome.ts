/**
 * =============================================================================
 *
 * Creted by anele on 11/04/2019
 *
 * =============================================================================
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  loading : Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private loadingCtrl :LoadingController, private  alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

}
