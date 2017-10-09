import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem,Message,SelectItem} from 'primeng/components/common/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import MyBrowser from './service/mybrowser';

@Component({
    selector: 'jhi-defer',
    templateUrl: './deferdemo.component.html',
    styles: []
})
export class DeferDemoComponent implements OnInit {
    msgs: Message[] = [];

    activeIndex: number = 0;

    browsers: Browser[];

    constructor(private browserService: BrowserService) { }

    ngOnInit(){}

    initData() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.browsers = browsers);
    }


    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
