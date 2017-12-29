import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TreeNode} from 'primeng/components/common/api';

@Injectable()
export class TreeNodeService {

    constructor(private http: HttpClient) {
    }

    getTouristPlaces(): Observable<any[]> {
        return this.http.get('content/primeng/assets/data/json/places/places.json')
            .map((response) => response as any[]);
    }
}
