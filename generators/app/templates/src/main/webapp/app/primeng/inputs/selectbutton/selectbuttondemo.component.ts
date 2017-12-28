import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-selectbutton',
    templateUrl: './selectbuttondemo.component.html',
    styles: []
})
export class SelectButtonDemoComponent implements OnInit {
    msgs: Message[] = [];

    basicinput: number;

    custominput: number;

    separatorinput: number;

    eventsinput: number;

    readonlyinput = 50;

    disabledinput = 100;

    types: SelectItem[];

    selectedType = 'readonly';

    activeIndex = 0;

    onChange(event: any) {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Spinner value is changed'});
    }

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
