import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-inputmask',
    templateUrl: './inputmaskdemo.component.html',
    styles: []
})
export class InputMaskDemoComponent implements OnInit {
    activeIndex = 0;

    basic: string;
    event: string;
    phone: string;
    date: string;
    serial: string;
    slot: string;
    optional: string;
    readonly = true;
    disabled = true;
    format: string;

    constructor(private messageService: MessageService) {
        this.basic = '';
        this.event = '';
        this.phone = '';
        this.date = '';
        this.serial = '';
        this.slot = '';
        this.optional = '';
        this.readonly = false;
        this.disabled = false;
        this.format = 'Option1';
    }

    onComplete(e: any): void {
        this.messageService.add(
            {severity: 'info', summary: `InputMask is completed with ${e}`});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {

    }

}
