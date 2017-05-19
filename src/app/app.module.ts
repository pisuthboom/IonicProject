import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';
import { Explore } from '../pages/explore/explore';
import { ProfilePage } from '../pages/profile/profile';
import { OrderPage } from '../pages/order/order';
import { CalculatorPage } from '../pages/calculator/calculator';
import { HistoryPage } from '../pages/history/history';
import { OrderdetailPage } from '../pages/orderdetail/orderdetail';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OrdercoffeePage } from '../pages/ordercoffee/ordercoffee'
import { Ordercoffee2Page } from '../pages/ordercoffee2/ordercoffee2'
import { Ordercoffee3Page } from '../pages/ordercoffee3/ordercoffee3'
import { Ordercoffee4Page } from '../pages/ordercoffee4/ordercoffee4'
import { Order2Page } from '../pages/order2/order2';
import { OrderteaPage } from '../pages/ordertea/ordertea'
import { Ordertea2Page } from '../pages/ordertea2/ordertea2'
import { Order3Page } from '../pages/order3/order3';
import { Order4Page } from '../pages/order4/order4';
import { Order5Page } from '../pages/order5/order5';
import { OrderbakeryPage } from '../pages/orderbakery/orderbakery'
import { Orderbakery2Page } from '../pages/orderbakery2/orderbakery2'
import { OrdericePage } from '../pages/orderice/orderice'
import { Orderice2Page } from '../pages/orderice2/orderice2'
import { OrderfruitPage } from '../pages/orderfruit/orderfruit'
import { Orderfruit2Page } from '../pages/orderfruit2/orderfruit2'

export const firebaseConfig = {
    apiKey: "AIzaSyCCU4pq8esKP0JTgZoEMJH9aBgBmtkbvKE",
    authDomain: "ionicproject-3db37.firebaseapp.com",
    databaseURL: "https://ionicproject-3db37.firebaseio.com",
    projectId: "ionicproject-3db37",
    storageBucket: "ionicproject-3db37.appspot.com",
    messagingSenderId: "350923866717"
};

@NgModule({
  declarations: [
    MyApp,
    Explore,
    ProfilePage,
    OrderPage,
    CalculatorPage,
    HistoryPage,
    OrderdetailPage,
    LoginPage,
    RegisterPage,
    OrdercoffeePage,
    Ordercoffee2Page,
    Ordercoffee3Page,
    Ordercoffee4Page,
    Order2Page,
    OrderteaPage,
    Ordertea2Page,
    Order3Page,
    Order4Page,
    Order5Page,
    OrderbakeryPage,
    Orderbakery2Page,
    OrdericePage,
    Orderice2Page,
    OrderfruitPage,
    Orderfruit2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Explore,
    ProfilePage,
    OrderPage,
    CalculatorPage,
    HistoryPage,
    OrderdetailPage,
    LoginPage,
    RegisterPage,
    OrdercoffeePage,
    Ordercoffee2Page,
    Ordercoffee3Page,
    Ordercoffee4Page,
    Order2Page,
    OrderteaPage,
    Ordertea2Page,
    Order3Page,
    Order4Page,
    Order5Page,
    OrderbakeryPage,
    Orderbakery2Page,
    OrdericePage,
    Orderice2Page,
    OrderfruitPage,
    Orderfruit2Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthService]
})
export class AppModule {}
