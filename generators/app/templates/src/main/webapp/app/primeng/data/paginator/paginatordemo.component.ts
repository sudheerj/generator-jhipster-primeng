import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';

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
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {
    }
}
