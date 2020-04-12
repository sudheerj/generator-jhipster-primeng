import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-accordion',
    templateUrl: './accordiondemo.component.html',
    styles: []
})
export class AccordionDemoComponent implements OnInit {
    activeIndex = 0;

    accordionActiveIndexes: number[];

    constructor(private messageService: MessageService) {
        this.accordionActiveIndexes = [0, 2];
    }

    onTabClose(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {}
}
