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

import { Login } from './login';
import { LoginService } from './login.service';

@NgModule({
  declarations: [ Login],

  imports: [ IonicPageModule.forChild(Login), HttpModule],

  exports : [ LoginService ],

  providers : [ HttpModule ],

  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule {}
