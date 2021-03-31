import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { KinIconComponentModule } from '../kin-icon/kin-icon.module';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
  
    KinIconComponentModule
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}