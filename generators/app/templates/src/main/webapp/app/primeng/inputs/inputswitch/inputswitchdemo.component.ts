import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-inputswitch',
    templateUrl: './inputswitchdemo.component.html',
    styles: []
})
export class InputSwitchDemoComponent implements OnInit {
    activeIndex = 0;

    checked1 = false;

    checked2 = true;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {

    }

    constructor(private messageService: MessageService) {
    }
}
