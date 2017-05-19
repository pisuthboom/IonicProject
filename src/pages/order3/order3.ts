import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderbakeryPage } from '../../pages/orderbakery/orderbakery';
import { Orderbakery2Page } from '../../pages/orderbakery2/orderbakery2';
/*
  Generated class for the Order3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order3',
  templateUrl: 'order3.html'
})
export class Order3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order3Page');
  }

  goToOrderBread(){
    this.navCtrl.push(OrderbakeryPage);
  }

   goToOrdeCookie(){
    this.navCtrl.push(Orderbakery2Page);
  }
}
