import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Country from './country';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) {
    }

    getCountries(): Observable<Country[]> {
        return this.http.get('content/primeng/assets/data/json/countries/countries.json')
            .map((response) => response as Country[]);
    }
}
