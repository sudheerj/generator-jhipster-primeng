import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import {MyEvent} from "../event/event";

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<any> {
        return this.http.get('content/primeng/assets/data/json/events/fullcalendarevents.json')
            .pipe(map((response) => response as MyEvent[]));
    }
}
