import { Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'jhi-defer',
    templateUrl: './deferdemo.component.html',
    styles: []
})
export class DeferDemoComponent {
    msgs: Message[] = [];

    activeIndex = 0;

    browsers: Browser[];

    constructor(private browserService: BrowserService) { }

    initData() {
        this.browserService.getBrowsers().subscribe((browsers: any) => setTimeout(() => this.browsers = browsers.data, 0));
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
