import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-paginator',
    templateUrl: './paginatordemo.component.html',
    styles: []
})
export class PaginatorDemoComponent implements OnInit {
    activeIndex = 0;
    totalRecords : number;

    constructor(private messageService: MessageService) {
        this.totalRecords = 100;
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {
    }

}
