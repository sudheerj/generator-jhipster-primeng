import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-dataview',
    templateUrl: './dataviewdemo.component.html',
    styles: []
})
export class DataViewDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    totalRecords = 100;

    basicBrowsers: Browser[];
    facetBrowsers: Browser[];
    inlineBrowsers: Browser[];
    lazyloadingBrowsers: Browser[];
    loaderBrowsers: Browser[];
    selectedBrowser: Browser;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.data.slice(0, 4));
        this.browserService.getBrowsers().subscribe((browsers: any) => this.facetBrowsers = browsers.data.slice(0, 4));
        this.browserService.getBrowsers().subscribe((browsers: any) => this.inlineBrowsers = browsers.data);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.loaderBrowsers = browsers.data);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.data.slice(0, 4));

        this.sortOptions = [
            {label: 'Engine', value: 'engine'},
            {label: 'Browser', value: 'browser'},
            {label: 'Grade', value: 'grade'}
        ];
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    selectBrowser(browser: Browser) {
        this.selectedBrowser = browser;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedBrowser = null;
    }

    loadData(event: any) {
        const start = event.first; // event.first = First row offset
        const end = start + event.rows; // event.rows = Number of rows per page
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.data.slice(start, end));
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
