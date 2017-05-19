import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrdericePage } from '../../pages/orderice/orderice'
import { Orderice2Page } from '../../pages/orderice2/orderice2'

/*
  Generated class for the Order4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order4',
  templateUrl: 'order4.html'
})
export class Order4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order4Page');
  }

  goToOrderIce(){
    this.navCtrl.push(OrdericePage);
  }

   goToOrderIceCookie(){
    this.navCtrl.push(Orderice2Page);
  }

}
