import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-tooltip',
    templateUrl: './tooltipdemo.component.html',
    styles: []
})
export class TooltipDemoComponent implements OnInit {
    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {}
}
