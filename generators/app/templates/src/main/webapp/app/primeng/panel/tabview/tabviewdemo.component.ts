import {Component, OnInit } from '@angular/core';
import {Message, MenuItem} from 'primeng/primeng';

@Component({
    selector: 'jhi-tabview',
    templateUrl: './tabviewdemo.component.html',
    styles: []
})
export class TabViewDemoComponent implements OnInit {
    msgs: Message[] = [];

    activeIndex = 0;

    onTabChange(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }

    onTabClose(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab closed', detail: 'Index: ' + event.index});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {}
}
