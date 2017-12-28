import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-passwordindicator',
    templateUrl: './passwordindicatordemo.component.html',
    styles: []
})
export class PasswordIndicatorDemoComponent implements OnInit {
    password: string;
    msgs: Message[] = [];
    activeIndex = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
