import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-inputswitch',
    templateUrl: './inputswitchdemo.component.html',
    styles: []
})
export class InputSwitchDemoComponent implements OnInit {
    activeIndex = 0;

    checked1: boolean;

    checked2: boolean;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {

    }

    constructor(private messageService: MessageService) {
        this.checked1 = false;
        this.checked2 = true;
    }
}
