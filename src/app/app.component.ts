import {Component, OnInit} from '@angular/core';

import {ModalController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashPage} from './splash/splash.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private modalCtrl: ModalController,
      private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.presentModal();
      // this.splashScreen.hide();
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SplashPage,
      cssClass: 'splash-modal'
    });
    return await modal.present();
  }

  ngOnInit() {
    console.log('init');
  }
}
