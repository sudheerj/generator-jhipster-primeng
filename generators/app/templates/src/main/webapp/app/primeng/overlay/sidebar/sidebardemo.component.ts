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

    visibleSidebar1: boolean;

    visibleSidebar2: boolean;

    visibleSidebar3: boolean;

    visibleSidebar4: boolean;

    visibleSidebar5: boolean;

    constructor(private messageService: MessageService) {
        this.visibleSidebar1 = false;
        this.visibleSidebar2 = false;
        this.visibleSidebar3 = false;
        this.visibleSidebar4 = false;
        this.visibleSidebar5 = false;
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {}
}
