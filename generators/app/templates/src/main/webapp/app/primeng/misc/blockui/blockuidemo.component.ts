import { Component } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-blockui',
    templateUrl: './blockuidemo.component.html',
    styles: []
})
export class BlockUIDemoComponent {

    activeIndex = 0;

    blockedPanel: boolean;

    blockedDocument: boolean;

    constructor(private messageService: MessageService) {
        this.blockedPanel = false;
        this.blockedDocument = false;
    }

    blockDocument(): void {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
