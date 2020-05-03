import {Component, OnInit} from '@angular/core';
import { MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-captcha',
    templateUrl: './captchademo.component.html',
    styles: []
})
export class CaptchaDemoComponent implements OnInit {
    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {}

    showResponse(event: any): void {
    this.messageService.add({severity: 'info', summary: 'Succees', detail: `User Responded ${event}`});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
