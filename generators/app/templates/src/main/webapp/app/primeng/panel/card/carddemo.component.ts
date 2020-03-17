import {Component} from '@angular/core';
import {MessageService, MenuItem} from 'primeng/api';

@Component({
    selector: 'jhi-card',
    templateUrl: './carddemo.component.html',
    styles: []
})
export class CardDemoComponent {

    items: MenuItem[];

    activeIndex = 0;

    onChangeStep(label: string) {
        this.messageService.push({severity: 'info', summary: label});
    }

    constructor(private messageService: MessageService) {
        this.items = [];
    }

}
