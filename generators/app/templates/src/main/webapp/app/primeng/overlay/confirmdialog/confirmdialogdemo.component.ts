import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
    selector: 'jhi-confirmdialog',
    templateUrl: './confirmdialogdemo.component.html',
    styles: []
})
export class ConfirmDialogDemoComponent implements OnInit {
    activeIndex = 0;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    ngOnInit(): void {}

    confirmAccept(): void {
        this.confirmationService.confirm({
            message: 'Do you want to subscribe for Angular news feeds?',
            header: 'Subscribe',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
            }
        });
    }

    confirmDelete(): void {
        this.confirmationService.confirm({
            message: 'Do you want to delete AngularNews account?',
            header: 'UnSubscribe',
            icon: 'fa fa-trash',
            accept: () => {
                this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'The record is deleted'});
            }
        });
    }

    confirmCustomAccept(): void {
        this.confirmationService.confirm({
            message: 'Do you like to use Table component?',
            accept: () => {
                this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
            }
        });
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
