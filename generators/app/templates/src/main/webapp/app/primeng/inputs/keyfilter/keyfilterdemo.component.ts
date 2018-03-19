import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
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

    msgs: Message[] = [];

    blockSpecial: RegExp = /^[^<>*!]+$/;

    blockSpace: RegExp = /[^\s]/;

    ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

    cc: string;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {
    }
}
