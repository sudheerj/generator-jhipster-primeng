import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-passwordindicator',
    templateUrl: './passwordindicatordemo.component.html',
    styles: []
})
export class PasswordIndicatorDemoComponent implements OnInit {
    password: string;
    activeIndex = 0;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {

    }

    constructor(private messageService: MessageService) {
        this.password = '';
    }
}
