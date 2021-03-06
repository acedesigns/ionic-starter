/**
 * =============================================================================
 *
 * Creted by anele on
 *
 * =============================================================================
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { Register } from './register';
import { RegisterService } from './register.service';

@NgModule({
  declarations: [ Register ],

  imports: [ IonicPageModule.forChild(Register), HttpModule ],

  exports : [ RegisterService ],

  providers : [ HttpModule ],

  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class RegisterModule {}
