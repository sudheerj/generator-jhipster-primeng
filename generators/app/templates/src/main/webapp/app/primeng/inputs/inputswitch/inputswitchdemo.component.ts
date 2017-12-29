import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-inputswitch',
    templateUrl: './inputswitchdemo.component.html',
    styles: []
})
export class InputSwitchDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    checked1 = false;

    checked2 = true;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
