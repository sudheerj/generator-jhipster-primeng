import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Score from './score';

@Injectable()
export class ScoreService {

    constructor(private http: HttpClient) {
    }

    getScores(): Observable<Score[]> {
        return this.http.get('/content/primeng/assets/data/json/scores/scores.json')
            .map((response) => response as Score[]);
    }
}
