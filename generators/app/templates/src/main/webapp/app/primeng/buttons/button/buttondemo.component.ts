import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-button',
    templateUrl: './buttondemo.component.html',
    styles: []
})
export class ButtonDemoComponent implements OnInit {
    activeIndex = 0;

    clicks = 0;

    clickMe() {
        this.msgs = [];
        this.messageService.add({severity: 'info', summary: 'The button is clicked ' + (++this.clicks) + ' times'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
    }
}
