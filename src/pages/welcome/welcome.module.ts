/**
 * =============================================================================
 *
 * Creted by anele on 11/04/2019
 *
 * =============================================================================
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


import { Welcome } from './welcome';

@NgModule({
  declarations: [ Welcome ],

  imports: [ IonicPageModule.forChild(Welcome), HttpModule, MatButtonModule, MatCheckboxModule ],

  exports : [  ],

  providers : [ HttpModule ],

  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WelcomeModule {}
