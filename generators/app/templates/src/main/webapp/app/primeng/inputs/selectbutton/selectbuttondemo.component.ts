import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-selectbutton',
    templateUrl: './selectbuttondemo.component.html',
    styles: []
})
export class SelectButtonDemoComponent implements OnInit {
    msgs: Message[] = [];

    types: SelectItem[];

    selectedType: string;

    selectedTypes: string[] = ['PrimeNG', 'PrimeReact'];

    selectedModes: string[];

    modes: SelectItem[];

    activeIndex = 0;

    onChange(event: any) {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Library name is changed'});
    }

    ngOnInit() {
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

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
