import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouPage } from './you.page';

const routes: Routes = [
  {
    path: '',
    component: YouPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YouPageRoutingModule {}
