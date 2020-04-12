import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'jhi-toast',
    templateUrl: './toastdemo.component.html',
    styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            color: #ffffff;
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-close-icon {
            color: #ffffff;
        }
    `],
    providers: [MessageService]
})
export class ToastDemoComponent implements OnInit {
    activeIndex = 0;

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {}

    showSuccess(): void {
        this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    showInfo(): void {
        this.messageService.add({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
    }

    showWarn(): void {
        this.messageService.add({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showError(): void {
        this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    showCustom(): void {
        this.messageService.add({key: 'custom', severity: 'info', summary: 'Custom Toast', detail: 'With a Gradient'});
    }

    showTopLeft(): void {
        this.messageService.add({key: 'tl', severity: 'info', summary: 'Success Message', detail: 'Order submitted'});
    }

    showTopCenter(): void {
        this.messageService.add({key: 'tc', severity: 'warn', summary: 'Info Message', detail: 'PrimeNG rocks'});
    }

    showConfirm(): void {
        this.messageService.clear();
        this.messageService.add({key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed'});
    }

    showMultiple(): void {
        this.messageService.addAll([
            {severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks'},
            {severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks'},
            {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'}
        ]);
    }

    onConfirm(): void {
        this.messageService.clear('c');
    }

    onReject(): void {
        this.messageService.clear('c');
    }

    clear(): void {
        this.messageService.clear();
    }

    onChangeStep(label: string): void {
        this.clear();
        this.messageService.add({severity: 'info', summary: label});
    }

}
