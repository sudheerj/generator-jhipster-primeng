import { Component, OnInit, OnDestroy } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-blockui',
    templateUrl: './blockuidemo.component.html',
    styles: []
})
export class BlockUIDemoComponent {

    activeIndex = 0;

    blockedPanel = false;

    blockedDocument = false;

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    constructor(private messageService: MessageService) {
    }

}
