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
        return this.http.get('content/primeng/assets/data/json/documents/documents.json', { observe: 'response' })
            .map((response) => (response as any).forEach((doc: any) => ({
                // make a copy because we must convert ISO-8601 string to Date
                id: doc.id,
                title: doc.title,
                size: doc.size,
                creator: doc.creator,
                creationDate: new Date(doc.creationDate),
                extension: doc.extension
            })));
    }
}
