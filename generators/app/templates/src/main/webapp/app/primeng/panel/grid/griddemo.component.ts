import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-grid',
    templateUrl: './griddemo.component.html',
    styles: []
})
export class GridDemoComponent implements OnInit {
    msgs: Message[] = [];

    activeIndex = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
    ngOnInit() {}
}
