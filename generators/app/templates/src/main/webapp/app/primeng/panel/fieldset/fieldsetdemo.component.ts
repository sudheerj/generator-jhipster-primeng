import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-fieldset',
    templateUrl: './fieldsetdemo.component.html',
    styles: []
})
export class FieldsetDemoComponent implements OnInit {
    msgs: Message[] = [];

    basic: string;

    activeIndex = 0;

    beforeToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
    ngOnInit() {}
}
