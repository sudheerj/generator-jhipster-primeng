import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-carousel',
    templateUrl: './carouseldemo.component.html',
    styles: []
})
export class CarouselDemoComponent implements OnInit {
    activeIndex = 0;
    basicBrowsers: Browser[];

    constructor(private browserService: BrowserService, private messageService: MessageService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.data.slice(0, 10));
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
