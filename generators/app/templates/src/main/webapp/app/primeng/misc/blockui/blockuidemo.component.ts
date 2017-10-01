import { Component, OnInit, OnDestroy } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {EmployeeService} from './service/employee.service';
import {Employee} from './model/employee';
import {Message} from 'primeng/components/common/api';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/finally';

@Component({
    selector: 'jhi-blockui',
    templateUrl: './blockuidemo.component.html',
    styles: []
})
export class BlockUIDemoComponent implements OnInit {
    employees: Employee[] = [];
    selectedEmployee: Employee;
    blockedTable: boolean;
    blockedPage: boolean;
    msgs: Message[] = [];

    get$: Subscription;
    delete$: Subscription;

    ngOnInit(){}

    constructor(private employeeService: EmployeeService) {
    }

    ngOnDestroy() {
        this.get$.unsubscribe();
        this.delete$.unsubscribe();
    }

    reload() {
        this.blockedPage = true;
        this.get$ = this.employeeService.getEmployees()
            .finally(() => {
                this.blockedPage = false;
            })
            .subscribe(
                (employees: Employee[]) => this.employees = employees,
                error => this.showError(error)
            );
    }

    remove() {
        if (this.selectedEmployee == null) {
            return;
        }

        this.blockedTable = true;
        this.delete$ = this.employeeService.deleteEmployee(this.selectedEmployee.id)
            .finally(() => {
                this.blockedTable = false;
                this.selectedEmployee = null;
            })
            .subscribe(
                () => {
                    this.employees = this.employees.filter(
                        (element: Employee) => element.id !== this.selectedEmployee.id);
                    this.showSuccess('Employee was successfully removed');
                },
                error => this.showError(error)
            );
    }

    private showError(errMsg: string) {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Sorry, an error occurred', detail: errMsg});
    }

    private showSuccess(successMsg: string) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: successMsg});
    }

}
