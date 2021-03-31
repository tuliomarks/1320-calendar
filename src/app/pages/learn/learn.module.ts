import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearnPage } from './learn.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { LearnPageRoutingModule } from './learn-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: LearnPage }]),
    LearnPageRoutingModule,
  ],
  declarations: [LearnPage]
})
export class LearnPageModule {}
