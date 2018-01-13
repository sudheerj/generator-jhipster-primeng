import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-carousel',
    templateUrl: './carouseldemo.component.html',
    styles: []
})
export class CarouselDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;
    basicBrowsers: Browser[];

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.data.slice(0, 10));
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
