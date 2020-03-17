import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-inputtext',
    templateUrl: './inputtextdemo.component.html',
    styles: []
})
export class InputTextDemoComponent implements OnInit {
    activeIndex = 0;

    text: string;

    disabled: boolean;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
        this.text = '';
        this.disabled = true;
    }
}
