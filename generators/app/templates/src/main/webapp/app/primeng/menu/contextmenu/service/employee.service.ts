import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Employee from './employee';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get('content/primeng/assets/data/json/employees/employees.json')
            .map((response) => response as Employee[]);
    }
}
