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

    constructor(private messageService: MessageService) {
        this.items = [];
    }

    onChangeStep(label: string): void {
        this.messageService.push({severity: 'info', summary: label});
    }

}
