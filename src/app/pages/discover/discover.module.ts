import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscoverPage } from './discover.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { DiscoverPageRoutingModule } from './discover-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DiscoverPageRoutingModule
  ],
  declarations: [
    DiscoverPage
  ]
})
export class DiscoverPageModule {}
