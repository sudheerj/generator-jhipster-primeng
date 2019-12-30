import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-inputgroup',
    templateUrl: './inputgroupdemo.component.html',
    styles: []
})
export class InputGroupDemoComponent implements OnInit {
    activeIndex = 0;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {
    }

    constructor(private messageService: MessageService) {
    }
}
