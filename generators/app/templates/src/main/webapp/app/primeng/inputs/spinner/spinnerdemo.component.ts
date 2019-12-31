import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-spinner',
    templateUrl: './spinnerdemo.component.html',
    styles: []
})
export class SpinnerDemoComponent implements OnInit {

    basicinput: number;

    custominput: number;

    separatorinput: number;

    eventsinput: number;

    readonlyinput = 50;

    disabledinput = 100;

    types: SelectItem[];

    selectedType = 'readonly';

    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    onChange(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'Spinner value is changed'});
    }

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
