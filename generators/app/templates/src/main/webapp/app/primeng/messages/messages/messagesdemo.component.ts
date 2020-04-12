import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-messages',
    templateUrl: './messagesdemo.component.html',
    styles: []
})
export class MessagesDemoComponent implements OnInit {
    messages: Message[] = [];
    msgs: Message[] = [];
    activeIndex = 0;

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {

    }

    showMessage(): void {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Angular Message', detail: 'Angular7 is ready'});
    }

    showSuccess(): void {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Angular Message', detail: 'Angular7 is ready'});
    }

    showInfo(): void {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG7 is ready'});
    }

    showWarn(): void {
        this.messages = [];
        this.messages.push({severity: 'warn', summary: 'Warn Message', detail: 'Upgrade to PrimeNG7 for more features'});
    }

    showError(): void {
        this.messages = [];
        this.messages.push({severity: 'error', summary: 'Error Message', detail: 'PrimeNG7 is not compatible with Angular2.x'});
    }

    showMultiple(): void {
        this.messages = [];
        this.messages.push({severity: 'info', summary: 'Message 1', detail: 'TypeScript is awesome'});
        this.messages.push({severity: 'info', summary: 'Message 2', detail: 'Angular is awesome'});
        this.messages.push({severity: 'info', summary: 'Message 3', detail: 'PrimeNG is awesome'});
    }

    showViaService(): void {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }

    onChangeStep(label: string): void {
        this.msgs.length = 0;
        this.clearMessages();
        this.msgs.push({severity: 'info', summary: label});
    }

    clearMessages(): void {
        this.messages = [];
    }

}
