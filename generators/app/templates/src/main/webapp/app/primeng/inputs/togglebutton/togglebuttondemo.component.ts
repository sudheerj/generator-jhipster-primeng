import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-togglebutton',
    templateUrl: './togglebuttondemo.component.html',
    styles: []
})
export class ToggleButtonDemoComponent implements OnInit {
    msgs: Message[] = [];

    basic = false;

    customized = true;

    events = false;

    disabled = false;

    activeIndex = 0;

    onToggleButton(e: any) {
        this.msgs = [];
        if (e.checked) {
            this.msgs.push({severity: 'info', summary: 'I like Angular Framework'});
        } else {
            this.msgs.push({severity: 'info', summary: 'I dont like Angular Framework'});
        }
    }

    onChange(e: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The selected options are ' + e.value});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {}
}
