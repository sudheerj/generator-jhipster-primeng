import { Component, ChangeDetectorRef } from '@angular/core';
import {MessageService} from 'primeng/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';

@Component({
    selector: 'jhi-defer',
    templateUrl: './deferdemo.component.html',
    styles: []
})
export class DeferDemoComponent {

    activeIndex = 0;

    browsers: Browser[];

    constructor(private browserService: BrowserService, private cdr: ChangeDetectorRef, private messageService: MessageService) {
        this.browsers = [];
    }

    initData(): void {
        this.browserService.getBrowsers().subscribe((browsers: any) => setTimeout(() => this.browsers = browsers.data, 0));
        this.cdr.detectChanges();
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
