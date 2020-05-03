import {Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'jhi-tabview',
    templateUrl: './tabviewdemo.component.html',
    styles: []
})
export class TabViewDemoComponent implements OnInit {

    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    onTabChange(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }

    onTabClose(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Tab closed', detail: 'Index: ' + event.index});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {}
}
