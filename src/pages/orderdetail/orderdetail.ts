import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Explore } from '../explore/explore'
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'page-orderdetail',
  templateUrl: 'orderdetail.html'
})
export class OrderdetailPage {
  id: any;
  orderdetail: FirebaseObjectObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private af: AngularFire) {
    this.id = navParams.get('orderid');
    this.orderdetail = af.database.object('/orders/'+this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailPage');
  }

  itemTapped() {
    this.navCtrl.setRoot(Explore);
  }

}
