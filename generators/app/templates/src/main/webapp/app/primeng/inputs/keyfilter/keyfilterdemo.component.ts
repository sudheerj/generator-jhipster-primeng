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

    blockSpecial: RegExp = /^[^<>*!]+$/;

    blockSpace: RegExp = /[^\s]/;

    ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

    cc: string;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
        this.blockSpace = null;
        this.blockSpecial = null;
        this.ccRegex = null;
        this.cc = null;
    }
}
