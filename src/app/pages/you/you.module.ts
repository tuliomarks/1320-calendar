import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YouPage } from './you.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { YouPageRoutingModule } from './you-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    YouPageRoutingModule
  ],
  declarations: [YouPage]
})
export class YouPageModule {}
