import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-inputswitch',
    templateUrl: './inputswitchdemo.component.html',
    styles: []
})
export class InputSwitchDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex: number = 0;

    checked1: boolean = false;

    checked2: boolean = true;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit(){

    }
}
