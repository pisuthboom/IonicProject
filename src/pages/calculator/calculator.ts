import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {
  selectedItem: any;
  icons: string;
  items: Array<{title: string, icon: string, cal: number}>;
  order: FirebaseListObservable<any[]>;
  day: any;
  month: any;
  year: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private af: AngularFire) {
    this.order = af.database.list('/orders');
    // Let's populate this page with some filler content for funzies
      this.icons = 'cafe';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
  
}
