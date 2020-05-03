import {Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'jhi-inputswitch',
    templateUrl: './inputswitchdemo.component.html',
    styles: []
})
export class InputSwitchDemoComponent implements OnInit {
    activeIndex = 0;

    checked1: boolean;

    checked2: boolean;

    constructor(private messageService: MessageService) {
        this.checked1 = false;
        this.checked2 = true;
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {

    }

}
