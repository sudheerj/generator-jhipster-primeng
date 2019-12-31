import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService, SelectItem} from 'primeng/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';

@Component({
    selector: 'jhi-inplace',
    templateUrl: './inplacedemo.component.html',
    styles: []
})
export class InplaceDemoComponent implements OnInit {

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
