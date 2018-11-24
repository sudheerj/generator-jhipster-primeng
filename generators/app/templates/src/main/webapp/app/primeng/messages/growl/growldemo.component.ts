import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-growl',
    templateUrl: './growldemo.component.html',
    styles: []
})
export class GrowlDemoComponent implements OnInit {
    msgs: Message[] = [];
    messages: Message[] = [];
    activeIndex = 0;

    ngOnInit() {

    }

    showMessage() {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Angular Message', detail: 'Angular7 is ready'});
    }

    showSuccess() {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Angular Message', detail: 'Angular7 is ready'});
    }

    showInfo() {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG7 is ready'});
    }

    showWarn() {
        this.messages = [];
        this.messages.push({severity: 'warn', summary: 'Warn Message', detail: 'Upgrade to PrimeNG7 for more features'});
    }

    showError() {
        this.messages = [];
        this.messages.push({severity: 'error', summary: 'Error Message', detail: 'PrimeNG7 is not compatible with Angular2.x'});
    }

    showMultiple() {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Message 1', detail: 'TypeScript is awesome'});
        this.messages.push({severity: 'info', summary: 'Message 2', detail: 'Angular is awesome'});
        this.messages.push({severity: 'info', summary: 'Message 3', detail: 'PrimeNG is awesome'});
    }

    onClickMessage(event: any) {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Info Message', detail: 'The message is selected'});
    }

    clear() {
        this.messages = [];
    }

    onChangeStep(label: string) {
        this.messages.length = 0;
        this.messages.push({severity: 'info', summary: label});
    }

}
