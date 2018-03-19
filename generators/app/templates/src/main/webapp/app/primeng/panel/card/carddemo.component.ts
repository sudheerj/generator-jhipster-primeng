import {Component} from '@angular/core';
import {Message, MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-card',
    templateUrl: './carddemo.component.html',
    styles: []
})
export class CardDemoComponent {
    msgs: Message[] = [];

    items: MenuItem[];

    activeIndex = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
