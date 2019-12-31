import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-radiobutton',
    templateUrl: './radiobuttondemo.component.html',
    styles: []
})
export class RadioButtonDemoComponent implements OnInit {

    basic: string;
    defaultSelection = 'Angular';
    eventsSelection: string;
    disabledSelection = 'Angular';

    activeIndex = 0;

    selectFramework(e: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: this.defaultSelection + ' is selected as SPA technology'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {}

    constructor(private messageService: MessageService) {
    }
}
