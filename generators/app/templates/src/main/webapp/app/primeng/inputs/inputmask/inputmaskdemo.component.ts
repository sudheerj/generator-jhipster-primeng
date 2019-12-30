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
    format = 'Option1';


    onComplete(e: any) {
        this.messageService.add(
            {severity: 'info', summary: 'InputMask is completed'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {

    }

    constructor(private messageService: MessageService) {
    }
}
