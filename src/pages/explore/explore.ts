import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { Order2Page } from '../order2/order2';
import { Order3Page } from '../order3/order3';
import { Order4Page } from '../order4/order4';
import { Order5Page } from '../order5/order5';


@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class Explore {
 selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.initializeItems();
  }

  initializeItems(){

      // Let's populate this page with some filler content for funzies
      this.icons = ['cafe', 'leaf', 'pizza', 'pizza', 'ice-cream', 'ice-cream', 'nutrition'];
      this.items = [];
      this.items.push({
        title: 'Coffee',
        icon: this.icons[0]
      });
      this.items.push({
        title: 'Tea',
        icon: this.icons[1]
      });
      this.items.push({
        title: 'Fruit Frappe',
        icon: this.icons[6]
      });
      this.items.push({
        title: 'Bakery',
        icon: this.icons[2]
      });
      this.items.push({
        title: 'Ice-cream',
        icon: this.icons[4]
      });
      
  }

  itemTapped(event, item) {
    if(item.title=='Coffee'){
      this.navCtrl.push(OrderPage);
    }else if(item.title=='Tea'){
      this.navCtrl.push(Order2Page);
    }else if(item.title=='Bakery'){
      this.navCtrl.push(Order3Page);
    }else if(item.title=='Ice-cream'){
      this.navCtrl.push(Order4Page);
    }else if(item.title=='Fruit Frappe'){
      this.navCtrl.push(Order5Page);
    }
    
  }

   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
}