import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-radiobutton',
    templateUrl: './radiobuttondemo.component.html',
    styles: []
})
export class RadioButtonDemoComponent implements OnInit {

    basic: string;
    defaultSelection: string;
    eventsSelection: string;
    disabledSelection: string;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.basic = '';
        this.defaultSelection = 'Angular';
        this.eventsSelection = '';
        this.disabledSelection = 'Angular'
    }

    selectFramework(e: any): void {
        this.messageService.add({severity: 'info', summary: this.defaultSelection + ' is selected as SPA technology', detail: e});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {}

}
