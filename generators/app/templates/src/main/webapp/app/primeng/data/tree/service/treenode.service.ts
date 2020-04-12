import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import {TreeNode} from 'primeng/api';

@Injectable()
export class TreeNodeService {

    constructor(private http: HttpClient) {
    }

    getTouristPlaces(): Observable<any[]> {
        return this.http.get('content/primeng/assets/data/json/cities/cities.json')
            .pipe(map((response) => response as any[]));
    }
}
