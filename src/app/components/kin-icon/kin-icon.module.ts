import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinIconComponent } from './kin-icon.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [KinIconComponent],
  exports: [KinIconComponent]
})
export class KinIconComponentModule {}
