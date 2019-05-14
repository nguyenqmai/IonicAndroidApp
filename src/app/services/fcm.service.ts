import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  private currentToken: string = null;

  constructor(private firebase: Firebase,
    private platform: Platform) {
      this.setup();
    }

    private setup() {
      this.firebase.onTokenRefresh().subscribe(newToken => {
        if (this.platform.is('ios')) {
          // need to open a modal and ask for granting permission
          // this.firebase.grantPermission();
        }
        console.log("got token " + newToken)
      })
    }

    public getCurrentToken() {
      return this.currentToken;
    }

    public subscribeToTopic(topic: string) {
      if (this.currentToken == null) {
        return; // should show a modal of issue
      }

      this.firebase.subscribe(topic).then(good => {}, bad => {})
    }

    
    public unsubscribeFromTopic(topic: string) {
      if (this.currentToken == null) {
        return; // should show a modal of issue
      }

      this.firebase.unsubscribe(topic).then(good => {}, bad => {})
    }

    public clearAllNotifications() {
      if (this.currentToken == null) {
        return; // should show a modal of issue
      }
      this.firebase.clearAllNotifications().then(good => {}, bad => {})
    }


    public onNotificationOpen() {
      return this.firebase.onNotificationOpen();
    }

}