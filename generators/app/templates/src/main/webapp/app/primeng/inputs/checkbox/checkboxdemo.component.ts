import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-checkbox',
    templateUrl: './checkboxdemo.component.html',
    styles: []
})
export class CheckboxDemoComponent implements OnInit {
    msgs: Message[] = [];

    checked: boolean;
    selectedVersions: string[] = ['AngularJS1.0', 'AngularV4.0'];
    status: any = true;
    feature = true;

    activeIndex = 0;

    ngOnInit() {}

    onChangeCheckbox() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Checkbox status is changed'});
    }

    onChangeTristate() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tristate Checkbox status is changed'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
