import {Component, OnInit } from '@angular/core';
import {Message, MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-panel',
    templateUrl: './carddemo.component.html',
    styles: []
})
export class CardDemoComponent implements OnInit {
    msgs: Message[] = [];

    items: MenuItem[];

    activeIndex = 0;


    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
