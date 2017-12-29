import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-datalist',
    templateUrl: './datalistdemo.component.html',
    styles: []
})
export class DataListDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;
    totalRecords = 100;

    basicBrowsers: Browser[];
    facetBrowsers: Browser[];
    paginationBrowsers: Browser[];
    lazyloadingBrowsers: Browser[];
    eventsBrowsers: Browser[];
    advancedBrowsers: Browser[];

    selectedBrowser: Browser;

    displayDialog: boolean;

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.slice(0, 4));
        this.browserService.getBrowsers().subscribe((browsers: any) => this.facetBrowsers = browsers.slice(0, 4));
        this.browserService.getBrowsers().subscribe((browsers: any) => this.paginationBrowsers = browsers);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.eventsBrowsers = browsers);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.advancedBrowsers = browsers);
    }

    selectBrowser(browser: Browser) {
        this.selectedBrowser = browser;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedBrowser = null;
    }

    onPagination($event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The first record  is ' +
        $event.first + 'th one.', detail: 'There are ' + $event.rows + ' rows in this current page'});
    }

    loadData(event: any) {
        const start = event.first; // event.first = First row offset
        const end = start + event.rows; // event.rows = Number of rows per page
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.slice(start, end));
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
