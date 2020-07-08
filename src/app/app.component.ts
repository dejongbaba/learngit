import {Component, OnInit} from '@angular/core';

import {ModalController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashPage} from './pages/splash/splash.page';
import {Router} from '@angular/router';
import {EventQueueService} from './services/event-queue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  activePath = '';

  points = 0;
  subscription: any;
  pages = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Learn Git Challenge',
      path: '/game'
    }
  ];

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private modalCtrl: ModalController,
      private router: Router,
      private statusBar: StatusBar,
      private eventService: EventQueueService
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
    this.subscription = this.eventService.eventBroker$.subscribe(data => {
      this.points = data?.points;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
