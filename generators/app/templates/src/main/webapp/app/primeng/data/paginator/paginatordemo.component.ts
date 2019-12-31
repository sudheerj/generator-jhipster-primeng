import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';
import {VCardService} from "../orgchart/service/vcard.service";

@Component({
    selector: 'jhi-paginator',
    templateUrl: './paginatordemo.component.html',
    styles: []
})
export class PaginatorDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;
    totalRecords = 100;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
    }
}
