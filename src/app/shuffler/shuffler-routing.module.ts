import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShufflerPage } from './shuffler.page';

const routes: Routes = [
  {
    path: '',
    component: ShufflerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShufflerPageRoutingModule {}
