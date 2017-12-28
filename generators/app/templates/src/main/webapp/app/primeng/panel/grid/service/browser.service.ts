import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Browser from './browser';

@Injectable()
export class BrowserService {

    constructor(private http: HttpClient) {
    }

    getBrowsers(): Observable<Browser[]> {
        return this.http.get('/assets/data/json/browsers/browsers.json')
            .map((response) => response as Browser[]);
    }
}
