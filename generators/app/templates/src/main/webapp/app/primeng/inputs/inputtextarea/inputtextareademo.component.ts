import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-inputtextarea',
    templateUrl: './inputtextareademo.component.html',
    styles: []
})
export class InputTextAreaDemoComponent implements OnInit {
    activeIndex = 0;

    msgs: Message[] = [];

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {
    }
}
