import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
    selector: 'jhi-keyfilter',
    templateUrl: './keyfilterdemo.component.html',
    styles: [],
    animations: [
        trigger('errorState', [
            state('hidden', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('visible => hidden', animate('400ms ease-in')),
            transition('hidden => visible', animate('400ms ease-out'))
        ])
    ]
})
export class KeyFilterDemoComponent implements OnInit {
    activeIndex = 0;

    blockSpecial: RegExp;

    blockSpace: RegExp;

    ccRegex: RegExp;

    cc: string;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
        this.blockSpace = /[^\s]/;
        this.blockSpecial = /^[^<>*!]+$/;
        this.ccRegex = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
        this.cc = '';
    }
}
