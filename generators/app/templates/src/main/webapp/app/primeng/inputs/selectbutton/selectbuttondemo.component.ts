import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-selectbutton',
    templateUrl: './selectbuttondemo.component.html',
    styles: []
})
export class SelectButtonDemoComponent implements OnInit {

    types: SelectItem[];

    selectedType: string;

    selectedTypes: string[];

    selectedTypeEvents: string[];

    selectedTypeDisabled: string[];

    selectedModes: string[];

    modes: SelectItem[];

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.types = [];
        this.selectedType = '';
        this.selectedTypes = ['PrimeNG', 'PrimeReact'];
        this.selectedTypeEvents = ['PrimeNG', 'PrimeUI'];
        this.selectedModes = [];
        this.selectedTypeDisabled = [];
        this.modes = [];
    }

    ngOnInit(): void {
        this.types = [];
        this.types.push({label: 'PrimeNG', value: 'PrimeNG'});
        this.types.push({label: 'PrimeReact', value: 'PrimeReact'});
        this.types.push({label: 'PrimeUI', value: 'PrimeUI'});

        this.modes = [
            {value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold'},
            {value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic'},
            {value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline'}
        ];
    }

    handleChange(event: any): void {
        this.messageService.add(
            {severity: 'info', summary: `Library name is changed ${event}`});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
