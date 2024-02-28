import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  subject = webSocket('wss://ws.coincap.io/prices?assets=bitcoin');

  connectCryptoSocket() {
    this.subject.subscribe({
      next: msg => console.log(msg), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }

  disconnectCryptoSocket() {
    this.subject.unsubscribe();
  }
}
