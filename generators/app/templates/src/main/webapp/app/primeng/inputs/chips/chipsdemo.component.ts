import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-chips',
    templateUrl: './chipsdemo.component.html',
    styles: []
})
export class ChipsDemoComponent implements OnInit {

    contactnames: string[];

    contactsnotified: string[];

    complexcontacts: string[];

    disabledcontacts: string[];

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.contactnames = [];
        this.contactsnotified = [];
        this.complexcontacts = [];
        this.disabledcontacts = ['PrimeTek', 'InfoTek'];
    }

    onAddContact(): void {
        this.messageService.add(
            {severity: 'info', summary: 'The contact is added'});
    }

    onRemoveContact(): void {
        this.messageService.add(
            {severity: 'info', summary: 'The contact is removed'});
    }

    onContactClick(): void {
        this.messageService.add(
            {severity: 'info', summary: 'The contact is clicked'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {

    }
}
