import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-inputtextarea',
    templateUrl: './inputtextareademo.component.html',
    styles: []
})
export class InputTextAreaDemoComponent implements OnInit {
    activeIndex = 0;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
    }
}
