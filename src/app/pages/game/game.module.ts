import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import {QuestionFormComponent} from '../../components/question-form/question-form.component';
import {ResultComponent} from '../../components/result/result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GamePage,QuestionFormComponent,ResultComponent]
})
export class GamePageModule {}
