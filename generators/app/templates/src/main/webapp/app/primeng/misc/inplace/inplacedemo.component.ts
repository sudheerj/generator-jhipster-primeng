import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem,Message,SelectItem} from 'primeng/components/common/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import MyBrowser from './service/mybrowser';

@Component({
    selector: 'jhi-inplace',
    templateUrl: './inplacedemo.component.html',
    styles: []
})
export class InplaceDemoComponent implements OnInit {
    msgs: Message[] = [];

    activeIndex: number = 0;

    browser: Browser = new MyBrowser();

    basicBrowsers: Browser[];

    browsers: Browser[];

    engines: SelectItem[];

    grades: SelectItem[];

    cols: any[];

    columnOptions: SelectItem[];

    constructor(private browserService: BrowserService) { }

    ngOnInit(){}

    initData() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.browsers = browsers);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.slice(0,10));
        this.cols = [
            {field: 'engine', header: 'Engine'},
            {field: 'browser', header: 'Browser'},
            {field: 'platform', header: 'Platform'},
            {field: 'grade', header: 'Grade'}
        ];
        this.columnOptions = [];
        for (let col of this.cols) {
            this.columnOptions.push({label: col.header, value: col});
        }

        this.engines = [];
        this.engines.push({label: 'All engines', value: null});
        this.engines.push({label: 'Trident', value: 'Trident'});
        this.engines.push({label: 'Gecko', value: 'Gecko'});
        this.engines.push({label: 'Webkit', value: 'Webkit'});

        this.grades = [];
        this.grades.push({label: 'A', value: 'A'});
        this.grades.push({label: 'B', value: 'B'});
        this.grades.push({label: 'C', value: 'C'});

    }


    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
