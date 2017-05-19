import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderfruitPage } from '../../pages/orderfruit/orderfruit'
import { Orderfruit2Page } from '../../pages/orderfruit2/orderfruit2'

/*
  Generated class for the Order5 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order5',
  templateUrl: 'order5.html'
})
export class Order5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order5Page');
  }

  goToOrderStraw(){
    this.navCtrl.push(OrderfruitPage);
  }

   goToOrderMango(){
    this.navCtrl.push(Orderfruit2Page);
  }

}
