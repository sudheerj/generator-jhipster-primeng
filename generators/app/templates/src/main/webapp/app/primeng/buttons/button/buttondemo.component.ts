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

    clicks : number;

    constructor(private messageService: MessageService) {
        this.clicks = 0;
    }

    clickMe(): void {
        this.messageService.add({severity: 'info', summary: 'The button is clicked ' + (++this.clicks) + ' times'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
    ngOnInit(): void {
    }

}
