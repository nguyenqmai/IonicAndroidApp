import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { Firebase } from '@ionic-native/firebase/ngx';


  var config = {
    apiKey: "AIzaSyCyCONHAJRLrxVw3HDFycEfX3BvfH087ic",
    authDomain: "my-first-project0123.firebaseapp.com",
    databaseURL: "https://my-first-project0123.firebaseio.com",
    projectId: "my-first-project0123",
    storageBucket: "my-first-project0123.appspot.com",
    messagingSenderId: "663327712134"
  };


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireMessagingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
