import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderteaPage } from '../../pages/ordertea/ordertea'
import { Ordertea2Page } from '../../pages/ordertea2/ordertea2'

@Component({
  selector: 'page-order2',
  templateUrl: 'order2.html'
})
export class Order2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Order2Page');
  }

  goToOrderLeTea(){
    this.navCtrl.push(OrderteaPage);
  }

   goToOrderMaTea(){
    this.navCtrl.push(Ordertea2Page);
  }

}
