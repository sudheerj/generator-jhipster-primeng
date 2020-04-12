import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-progressspinner',
    templateUrl: './progressspinnerdemo.component.html',
    styles: []
})
export class ProgressSpinnerDemoComponent implements OnInit {
    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {

    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
