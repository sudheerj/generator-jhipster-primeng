import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-dialog',
    templateUrl: './dialogdemo.component.html',
    styles: []
})
export class DialogDemoComponent implements OnInit {
    basic = false;
    custom = false;
    advanced = false;
    maximizable = false;
    events = false;

    activeIndex = 0;

    ngOnInit() {

    }

    showBasicDialog() {
        this.basic = true;
        this.custom = false;
        this.advanced = false;
        this.maximizable = false;
        this.events = false;
    }

    showCustomDialog() {
        this.basic = false;
        this.custom = true;
        this.advanced = false;
        this.maximizable = false;
        this.events = false;
    }

    showAdvancedDialog() {
        this.basic = false;
        this.custom = false;
        this.advanced = true;
        this.maximizable = false;
        this.events = false;
    }

    showEventsDialog() {
        this.basic = false;
        this.custom = false;
        this.advanced = false;
        this.maximizable = false;
        this.events = true;
    }

    showDialog() {
        this.maximizable = true;
        this.messageService.add({severity: 'info', summary: 'Show dialog', detail: 'When dialog is shown'});
    }

    hideDialog() {
        this.maximizable = false;
        this.messageService.add({severity: 'info', summary: 'Hide dialog', detail: 'when dialog is hidden'});
    }

    onComplete() {
        this.custom = false;
        this.advanced = false;
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    constructor(private messageService: MessageService) {
    }
}
