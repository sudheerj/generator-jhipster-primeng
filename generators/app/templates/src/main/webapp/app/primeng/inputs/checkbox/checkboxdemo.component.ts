import {Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'jhi-checkbox',
    templateUrl: './checkboxdemo.component.html',
    styles: []
})
export class CheckboxDemoComponent implements OnInit {

    checked: boolean;
    selectedVersions: string[];
    status: any;
    feature: boolean;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.checked = false;
        this.selectedVersions = ['AngularJS1.0', 'AngularV4.0'];
        this.status = true;
        this.feature = true;
    }

    ngOnInit(): void {}

    onChangeCheckbox(): void {
        this.messageService.add({severity: 'info', summary: 'Checkbox status is changed'});
    }

    onChangeTristate(): void {
        this.messageService.add({severity: 'info', summary: 'Tristate Checkbox status is changed'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
