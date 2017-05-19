import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Explore } from '../explore/explore'
import { AngularFire, FirebaseListObservable } from 'angularfire2';


/*
  Generated class for the Ordercoffee4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ordercoffee4',
  templateUrl: 'ordercoffee4.html'
})
export class Ordercoffee4Page {

    quantity= 0;
    size: any;
    type=0;
    addition=0;
    p=0;

  order: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private af: AngularFire) {
    this.order = af.database.list('/orders');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdercoffeePage');
  }

  addOrder(){
    if(this.size=='s'){
      this.p=50;
    }else if(this.size=='m'){
      this.p=55;
    }else if(this.size=='l'){
      this.p=60;
    }
    this.order.push({ 
      names: "Latte Macchiato",
      quantity: this.quantity,
      size: this.size,
      type: this.type,
      addition: this.addition,
      price: this.quantity*this.p,
      calories: this.quantity*200
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
