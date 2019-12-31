import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-sidebar',
    templateUrl: './sidebardemo.component.html',
    styles: []
})
export class SideBarDemoComponent implements OnInit {
    activeIndex = 0;

    visibleSidebar1;

    visibleSidebar2;

    visibleSidebar3;

    visibleSidebar4;

    visibleSidebar5;

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {}

    constructor(private messageService: MessageService) {
    }
}
