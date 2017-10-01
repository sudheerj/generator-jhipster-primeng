import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-radiobutton',
    templateUrl: './radiobuttondemo.component.html',
    styles: []
})
export class RadioButtonDemoComponent implements OnInit {
    msgs: Message[] = [];

    basic: string;
    defaultSelection: string = 'Angular';
    eventsSelection: string;
    disabledSelection: string = 'Angular';

    activeIndex: number = 0;

    selectFramework(e: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: this.defaultSelection + ' is selected as SPA technology'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit(){}
}
