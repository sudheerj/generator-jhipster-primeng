import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import {Message, SelectItem, LazyLoadEvent} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-virtualscroller',
    templateUrl: './virtualscrollerdemo.component.html',
    styles: [`
        .browser-item {
            border-bottom: 1px solid #D5D5D5;
        }

        .empty-browser-item-index {
            background-color: #f1f1f1;
            width: 60px;
            height: 60px;
            margin: 36px auto 0 auto;
            animation: pulse 1s infinite ease-in-out;
        }

        .empty-browser-item-image {
            background-color: #f1f1f1;
            width: 120px;
            height: 120px;
            animation: pulse 1s infinite ease-in-out;
        }

        .empty-browser-item-text {
            background-color: #f1f1f1;
            height: 18px;
            animation: pulse 1s infinite ease-in-out;
        }

        .title-container {
            padding: 1em;
            text-align: right;
        }

        .sort-container {
            text-align: left;
        }

        @media (max-width: 40em) {
            .browser-item {
                text-align: center;
            }
        }
    `]
})
export class VirtualScrollerDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;
    basicBrowsers: Browser[];
    lazyloadingBrowsers: Browser[];

    totalLazyBrowsersLength: number;
    timeout: any;

    sortKey: string;

    sortOptions: SelectItem[];

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.data);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.data.slice(0, 4));

        // in a real application, make a remote request to retrieve the number of records only, not the actual records
        this.totalLazyBrowsersLength = 10000;

        this.sortOptions = [
            {label: 'Highest grade First', value: '!grade'},
            {label: 'Lowest grade First', value: 'grade'}
        ];
    }

    loadData(event: any) {
        // in a real application, make a remote request to load data using state metadata from event
        // event.first = First row offset
        // event.rows = Number of rows per page

        // imitate db connection over a network
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
        const start = event.first; // event.first = First row offset
        const end = start + event.rows; // event.rows = Number of rows per page
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.data.slice(start, end));
        }, 1000);
    }

    onSortChange() {
        if (this.sortKey.indexOf('!') === 0) {
            this.sort(-1);
        } else {
            this.sort(1);
        }
    }

    sort(order: number): void {
        const basicBrowsers = [...this.basicBrowsers];
        basicBrowsers.sort((data1, data2) => {
            const value1 = data1.grade;
            const value2 = data2.grade;
            const result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

            return (order * result);
        });

        this.basicBrowsers = basicBrowsers;
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
