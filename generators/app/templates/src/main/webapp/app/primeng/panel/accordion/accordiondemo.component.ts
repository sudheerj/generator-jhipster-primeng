import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-accordion',
    templateUrl: './accordiondemo.component.html',
    styles: []
})
export class AccordionDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    accordionActiveIndexes: number[] = [0, 2];

    onTabClose(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {}
}
