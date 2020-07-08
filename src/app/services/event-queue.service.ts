import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventQueueService {
  private eventBroker = new Subject();

  constructor() {
  }

  eventBroker$ = this.eventBroker.asObservable();

  notifyApp(data) {
    this.eventBroker.next(data);
  }
}
