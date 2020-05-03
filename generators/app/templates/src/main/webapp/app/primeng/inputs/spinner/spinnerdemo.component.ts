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

    readonlyinput: number;

    disabledinput: number;

    types: SelectItem[];

    selectedType: string;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.basicinput = 0;
        this.custominput = 0;
        this.separatorinput = 0;
        this.eventsinput = 0;
        this.readonlyinput = 50;
        this.disabledinput = 100;
        this.types = [];
        this.selectedType = 'readonly';
    }

    onChange(event: any): void {
        this.messageService.add(
            {severity: 'info', summary: `Spinner value is changed ${event}`});
    }

    ngOnInit(): void {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
