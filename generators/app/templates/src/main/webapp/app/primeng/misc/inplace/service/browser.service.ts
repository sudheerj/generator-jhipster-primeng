import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import Browser from './browser';
import { map } from "rxjs/operators";

@Injectable()
export class BrowserService {

    constructor(private http: HttpClient) {
    }

    getBrowsers(): Observable<Browser[]> {
        return this.http.get('content/primeng/assets/data/json/browsers/browsers.json')
            .pipe(map((response) => response as Browser[]));
    }
}
