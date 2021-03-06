/**
 * =============================================================================
 *
 * Updated by anele on 2019/05/02
 *
 * =============================================================================
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';

@NgModule({

  declarations: [ MyApp ],

  imports: [
    BrowserModule,BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],

  entryComponents: [ MyApp ],

  providers: [ StatusBar,SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
