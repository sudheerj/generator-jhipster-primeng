import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-fieldset',
    templateUrl: './fieldsetdemo.component.html',
    styles: []
})
export class FieldsetDemoComponent implements OnInit {

    basic: string;

    activeIndex = 0;

    beforeToggle() {
        this.messageService.add(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.messageService.add(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
    ngOnInit() {}

    constructor(private messageService: MessageService) {
        this.basic = '';
    }
}
