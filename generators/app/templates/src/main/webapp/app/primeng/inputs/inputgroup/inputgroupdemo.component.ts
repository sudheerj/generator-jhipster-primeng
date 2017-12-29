import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-inputgroup',
    templateUrl: './inputgroupdemo.component.html',
    styles: []
})
export class InputGroupDemoComponent implements OnInit {
    activeIndex = 0;

    msgs: Message[] = [];

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {
    }
}
