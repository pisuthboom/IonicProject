import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Explore } from '../explore/explore';
import { RegisterPage } from '../register/register';
import { AuthService } from '../../providers/auth-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,private _auth: AuthService) {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
    
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth.displayName());
    this.navCtrl.setRoot(Explore);

  }

  goToHomePage(){
    this.navCtrl.setRoot(Explore);
  }
  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
}
