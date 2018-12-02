import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<any> {
        return this.http.get('content/primeng/assets/data/json/events/fullcalendarevents.json')
            .map(response => response);
    }
}
