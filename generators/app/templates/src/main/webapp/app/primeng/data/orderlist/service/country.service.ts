import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import Country from './country';
import Browser from "../../carousel/service/browser";

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) {
    }

    getCountries(): Observable<Country[]> {
        return this.http.get('content/primeng/assets/data/json/countries/countries.json')
            .pipe(map((response) => response as Country[]));
    }
}
