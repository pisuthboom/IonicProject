import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Explore } from '../explore/explore'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Orderbakery2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-orderbakery2',
  templateUrl: 'orderbakery2.html'
})
export class Orderbakery2Page {

  quantity= 0;
    size: any;
    p=0;

  order: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private af: AngularFire) {
    this.order = af.database.list('/orders');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdercoffeePage');
  }

  addOrder(){
    this.order.push({ 
      names: "Cookie",
      quantity: this.quantity,
      date: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      price: this.quantity*15,
      calories: this.quantity*100
   });
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Do you confirm?',
      message: 'You cannot cancel the order if you click yes.',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.addOrder();
            this.navCtrl.setRoot(Explore);
          }
        }
      ]
    });
    confirm.present();
  }
}
