import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-inputtext',
    templateUrl: './inputtextdemo.component.html',
    styles: []
})
export class InputTextDemoComponent implements OnInit {
    activeIndex = 0;

    msgs: Message[] = [];

    text: string;

    disabled = true;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {
    }
}
