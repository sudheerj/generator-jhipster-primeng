import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import Employee from './employee';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get('content/primeng/assets/data/json/employees/employees.json')
            .pipe(map((response) => response as Employee[]));
    }
}
