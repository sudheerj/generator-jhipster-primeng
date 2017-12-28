import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

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

    msgs: Message[] = [];

    onComplete(e: any) {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'InputMask is completed'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
