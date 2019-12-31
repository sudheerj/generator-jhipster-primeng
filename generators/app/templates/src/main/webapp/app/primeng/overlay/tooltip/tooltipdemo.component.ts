import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-tooltip',
    templateUrl: './tooltipdemo.component.html',
    styles: []
})
export class TooltipDemoComponent implements OnInit {
    activeIndex = 0;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {}

    constructor(private messageService: MessageService) {
    }
}
