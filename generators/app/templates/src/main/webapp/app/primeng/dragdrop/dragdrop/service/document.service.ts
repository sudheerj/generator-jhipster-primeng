import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import {Document} from './document';

@Injectable()
export class DocumentService {
    constructor(private http: HttpClient) {
    }

    getDocuments(): Observable<Document[]> {
        return this.http.get('content/primeng/assets/data/json/documents/documents.json')
            .pipe(map(response => response as Document[]));
    }
}
