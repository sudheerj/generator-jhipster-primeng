import { Component, OnInit, OnDestroy } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-blockui',
    templateUrl: './blockuidemo.component.html',
    styles: []
})
export class BlockUIDemoComponent {

    msgs: Message[] = [];
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
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
