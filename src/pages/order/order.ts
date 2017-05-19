import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrdercoffeePage } from '../ordercoffee/ordercoffee'
import { Ordercoffee2Page } from '../ordercoffee2/ordercoffee2'
import { Ordercoffee3Page } from '../ordercoffee3/ordercoffee3'
import { Ordercoffee4Page } from '../ordercoffee4/ordercoffee4'

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  goToOrderCofEs(){
    this.navCtrl.push(OrdercoffeePage);
  }

  goToOrderCofCap(){
    this.navCtrl.push(Ordercoffee2Page);
  }

  goToOrderCofLat(){
    this.navCtrl.push(Ordercoffee3Page);
  }

  goToOrderCofLatM(){
    this.navCtrl.push(Ordercoffee4Page);
  }
  

}
