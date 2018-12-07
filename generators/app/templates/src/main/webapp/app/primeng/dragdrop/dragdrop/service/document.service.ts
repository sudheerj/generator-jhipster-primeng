import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Document} from './document';

@Injectable()
export class DocumentService {
    constructor(private http: HttpClient) {
    }

    getDocuments(): Observable<Document[]> {
        return this.http.get('content/primeng/assets/data/json/documents/documents.json')
            .map(response => response as any);
    }
}
