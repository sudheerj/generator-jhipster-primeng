import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-chips',
    templateUrl: './chipsdemo.component.html',
    styles: []
})
export class ChipsDemoComponent implements OnInit {
    msgs: Message[] = [];

    contactnames: string[];

    contactnotified: string[];

    complexcontacts: string[];

    disabledcontacts: string[] = ['PrimeTek', 'GeekoTek'];

    activeIndex = 0;

    onAddContact() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'The contact is added'});
    }

    onRemoveContact() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'The contact is removed'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
