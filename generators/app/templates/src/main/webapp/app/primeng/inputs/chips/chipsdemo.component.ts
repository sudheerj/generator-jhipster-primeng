import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-chips',
    templateUrl: './chipsdemo.component.html',
    styles: []
})
export class ChipsDemoComponent implements OnInit {

    contactnames: string[];

    contactnotified: string[];

    complexcontacts: string[];

    disabledcontacts: string[];

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.contactnames = [];
        this.contactnotified = [];
        this.complexcontacts = [];
        this.disabledcontacts = ['PrimeTek', 'InfoTek'];
    }

    onAddContact() {
        this.messageService.add(
            {severity: 'info', summary: 'The contact is added'});
    }

    onRemoveContact() {
        this.messageService.add(
            {severity: 'info', summary: 'The contact is removed'});
    }

    onContactClick() {
        this.messageService.add(
            {severity: 'info', summary: 'The contact is clicked'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
