import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShufflerPageRoutingModule } from './shuffler-routing.module';

import { ShufflerPage } from './shuffler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShufflerPageRoutingModule
  ],
  declarations: [ShufflerPage]
})
export class ShufflerPageModule {}
