import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { CoinCapPrices } from '../models/prices.models';
import { RetryConfig, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private readonly WS_ENDPOINT = environment.wsEndpoint;
  private subject?: WebSocketSubject<CoinCapPrices>;
  private retryConfig: RetryConfig = {
    delay: 5000,
  };

  private getWebSocket(): WebSocketSubject<CoinCapPrices> {
    return webSocket({
      url: this.WS_ENDPOINT,
      closeObserver: {
        next: () => {
          console.log('[PricesService]: connection closed');
        }
      },
    });
  }

  connectCryptoSocket() {
    if (!this.subject || this.subject.closed) {
      this.subject = this.getWebSocket();
    }
    this.subject.pipe(
      retry(this.retryConfig) // auto reconnect
    ).subscribe({
      next: msg => console.log(msg), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    });
  }

  disconnectCryptoSocket() {
    if (this.subject) {
      this.subject.unsubscribe();
      this.subject = undefined;
    }
  }
}
