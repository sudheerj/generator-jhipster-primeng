import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-togglebutton',
    templateUrl: './togglebuttondemo.component.html',
    styles: []
})
export class ToggleButtonDemoComponent implements OnInit {

    basic = false;

    customized = true;

    events = false;

    disabled = false;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    onToggleButton(e: any) {
        if (e.checked) {
            this.messageService.add({severity: 'info', summary: 'I like Angular Framework'});
        } else {
            this.messageService.add({severity: 'info', summary: 'I dont like Angular Framework'});
        }
    }

    onChange(e: any) {
        this.messageService.add({severity: 'info', summary: 'The selected options are ' + e.value});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {}
}
