import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-button',
    templateUrl: './buttondemo.component.html',
    styles: []
})
export class ButtonDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    clicks = 0;

    clickMe() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The button is clicked ' + (++this.clicks) + ' times'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
    ngOnInit() {
    }
}
