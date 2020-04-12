import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-dialog',
    templateUrl: './dialogdemo.component.html',
    styles: []
})
export class DialogDemoComponent implements OnInit {
    basic: boolean;
    custom: boolean;
    advanced: boolean;
    maximizable: boolean;
    events: boolean;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.basic = false;
        this.custom = false;
        this.advanced = false;
        this.maximizable = false;
        this.events = false;
    }

    ngOnInit(): void {

    }

    showBasicDialog(): void {
        this.basic = true;
        this.custom = false;
        this.advanced = false;
        this.maximizable = false;
        this.events = false;
    }

    showCustomDialog(): void {
        this.basic = false;
        this.custom = true;
        this.advanced = false;
        this.maximizable = false;
        this.events = false;
    }

    showAdvancedDialog(): void {
        this.basic = false;
        this.custom = false;
        this.advanced = true;
        this.maximizable = false;
        this.events = false;
    }

    showEventsDialog(): void {
        this.basic = false;
        this.custom = false;
        this.advanced = false;
        this.maximizable = false;
        this.events = true;
    }

    showDialog(): void {
        this.maximizable = true;
        this.messageService.add({severity: 'info', summary: 'Show dialog', detail: 'When dialog is shown'});
    }

    hideDialog(): void {
        this.maximizable = false;
        this.messageService.add({severity: 'info', summary: 'Hide dialog', detail: 'when dialog is hidden'});
    }

    onComplete(): void {
        this.custom = false;
        this.advanced = false;
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
