import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderdetailPage } from '../orderdetail/orderdetail';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  selectedItem: any;
  order: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private af: AngularFire) {
    // If we navigated to this page, we will have an item available as a nav param
    this.order = af.database.list('/orders');
    
  }


  itemTapped(event, key) {
    this.navCtrl.push(OrderdetailPage,{orderid: key});
  }

}
