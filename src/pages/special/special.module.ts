import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Special } from './special';

@NgModule({
  declarations: [
    Special,
  ],
  imports: [
    IonicPageModule.forChild(Special),
  ],
})
export class SpecialModule {}
