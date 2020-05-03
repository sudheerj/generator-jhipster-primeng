import { Component, OnInit } from '@angular/core';
import {MessageService, SelectItem, MenuItem, LazyLoadEvent} from 'primeng/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';
import MyBrowser from './service/mybrowser';

@Component({
    selector: 'jhi-table',
    templateUrl: './tabledemo.component.html',
    styles: [`
        .new-version {
            background-color: #1CA979 !important;
            color: #ffffff !important;
        }
        .ui-grid-row div {
            padding: 4px 10px
        }

        .ui-grid-row div label {
            font-weight: bold;
        }

        /* Column Priorities */
        @media only all {
            th.ui-p-6,
            td.ui-p-6,
            th.ui-p-5,
            td.ui-p-5,
            th.ui-p-4,
            td.ui-p-4,
            th.ui-p-3,
            td.ui-p-3,
            th.ui-p-2,
            td.ui-p-2,
            th.ui-p-1,
            td.ui-p-1 {
                display: none;
            }
        }

        /* Show priority 1 at 320px (20em x 16px) */
        @media screen and (min-width: 20em) {
            th.ui-p-1,
            td.ui-p-1 {
                display: table-cell;
            }
        }

        /* Show priority 2 at 480px (30em x 16px) */
        @media screen and (min-width: 30em) {
            th.ui-p-2,
            td.ui-p-2 {
                display: table-cell;
            }
        }

        /* Show priority 3 at 640px (40em x 16px) */
        @media screen and (min-width: 40em) {
            th.ui-p-3,
            td.ui-p-3 {
                display: table-cell;
            }
        }

        /* Show priority 4 at 800px (50em x 16px) */
        @media screen and (min-width: 50em) {
            th.ui-p-4,
            td.ui-p-4 {
                display: table-cell;
            }
        }

        /* Show priority 5 at 960px (60em x 16px) */
        @media screen and (min-width: 60em) {
            th.ui-p-5,
            td.ui-p-5 {
                display: table-cell;
            }
        }

        /* Show priority 6 at 1,120px (70em x 16px) */
        @media screen and (min-width: 70em) {
            th.ui-p-6,
            td.ui-p-6 {
                display: table-cell;
            }
        }
    `]})
export class TableDemoComponent implements OnInit {

    activeIndex = 0;

    browser: Browser;

    basicBrowsers: Browser[];

    browsers: Browser[];

    selectedBrowser: Browser;

    selectedBrowsers: Browser[];

    displayDialog: boolean;

    stacked: boolean;

    newBrowser: boolean;

    totalRecords: number;

    engines: SelectItem[];

    grades: SelectItem[];

    expandedRows: any[];

    cols: any[];

    columnOptions: SelectItem[];

    tableItems: MenuItem[];

    selectedColumns: any[];

    sortField: string;

    frozenBrowsers: Browser[];

    frozenCols: any[];

    scrollableCols: any[];

    ratingFilter: number;

    loading: boolean;

    constructor(private browserService: BrowserService, private messageService: MessageService) {
        this.browser = new MyBrowser();
        this.basicBrowsers = [];
        this.browsers = [];
        this.selectedBrowser = new MyBrowser();
        this.selectedBrowsers = [];
        this.displayDialog = false;
        this.stacked = false;
        this.newBrowser = false;
        this.totalRecords = 100;
        this.engines = [];
        this.grades = [];
        this.expandedRows = [];
        this.cols = [];
        this.columnOptions = [];
        this.tableItems = [];
        this.selectedColumns = [];
        this.sortField = '';
        this.frozenBrowsers = [];
        this.frozenCols = [];
        this.scrollableCols = [];
        this.ratingFilter = 0;
        this.loading = false;
    }

    ngOnInit(): void {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.browsers = browsers.data);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.data.slice(0, 10));
        this.cols = [
            {field: 'engine', header: 'Engine'},
            {field: 'browser', header: 'Browser'},
            {field: 'platform', header: 'Platform'},
            {field: 'grade', header: 'Grade'}
        ];
        this.columnOptions = [];
        for (const col of this.cols) {
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

        this.tableItems = [
            { label: 'View', icon: 'pi pi-search', command: () => this.selectBrowser(this.selectedBrowser) },
            { label: 'Delete', icon: 'pi pi-times', command: () => this.delete() }
        ];
        this.selectedColumns = this.cols;
        this.frozenCols = [
            { field: 'engine', header: 'Engine' },
            { field: 'browser', header: 'Browser' }
        ];

        this.frozenBrowsers = [
            { "engine": "Trident", "browser": "Internet Explorer 4.0", "platform": "Win 95+", "version": 4, "code":"ie", "grade":"X" },
            { "engine": "Gecko", "browser": "Firefox 1.5", "platform": "Win 98+ / OSX.2+", "version": 1.8, "code":"firefox", "grade":"A"  }
        ];

        this.scrollableCols = [
            { field: 'engine', header: 'Engine' },
            { field: 'browser', header: 'Browser' },
            {field: 'platform', header: 'Platform'},
        ];

    }

    onRowClick(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Browser clicked', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onRowDblClick(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Browser double clicked', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onRowSelect(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Type of selection:', detail: event.type});
        this.messageService.add({severity: 'info', summary: 'Browser Selected', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onRowUnselect(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Type of selection:', detail: event.type});
        this.messageService.add({severity: 'info', summary: 'Browser Unselected', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onHeaderCheckboxToggle(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Header checkbox toggled:', detail: event.checked});
    }

    onContextMenuSelect(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Selected data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onColResize(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Resized column header' + event.element,
            detail: 'Change of column width' +  event.delta + 'px'});
    }

    onColReorder(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Index of dragged column', detail: event.dragIndex});
        this.messageService.add({severity: 'info', summary: 'Index of dropped column', detail: event.dropIndex});
        this.messageService.add({severity: 'info', summary: 'Columns array after reorder', detail: event.columns});
    }

    onEditInit(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Column is ', detail: event.column});
        this.messageService.add({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onEdit(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Row index', detail: event.index});
        this.messageService.add({severity: 'info', summary: 'Column is ', detail: event.column});
        this.messageService.add({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }
    onEditComplete(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Row index', detail: event.index});
        this.messageService.add({severity: 'info', summary: 'Column is ', detail: event.column});
        this.messageService.add({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onEditCancel(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Row index', detail: event.index});
        this.messageService.add({severity: 'info', summary: 'Column is ', detail: event.column});
        this.messageService.add({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onPage(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Index of first record:', detail: event.first});
        this.messageService.add({severity: 'info', summary: 'Number of rows: ', detail: event.rows});
    }

    onSort(event: any): void {
        this.sortField = event.field;
    }

    onFilter(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Filter object(field,value and matchmode):', detail: event.filters});
    }

    onRowExpand(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Expanded row:', detail: event.data});
    }
    onRowCollapse(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Collapsed row:', detail: event.data});
    }

    onRowGroupExpand(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Row group expanded:', detail: event.group});
    }

    onRowGroupCollapse(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Row group collapsed:', detail: event.group});
    }

    loadBrowsersLazy(event: LazyLoadEvent): void {
        // event.first = First row offset
        // event.rows = Number of rows per page
        // event.sortField = Field name to sort with
        // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        // filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        this.loading = true;
        this.browserService.getBrowsers().subscribe((browsers: Browser[]) => {
            if (event.first && event.rows) {
            this.browsers = browsers.slice(event.first, (event.first + event.rows));
            }});
        this.loading = false;
    }

    addBrowser(): void {
        this.newBrowser = true;
        this.browser = new MyBrowser();
        this.displayDialog = true;
    }

    save(): void {
        const browsers = [...this.browsers];
        if (this.newBrowser) {
            browsers.push(this.browser);
        } else {
            browsers[this.findSelectedBrowserIndex()] = this.browser;
        }
        this.browsers = browsers;
        this.browser = {} as Browser;
        this.displayDialog = false;
    }

    delete(): void {
        const index = this.findSelectedBrowserIndex();
        this.browsers = this.browsers.filter( (val, i) => i !== index);
        this.browser = {};
        this.displayDialog = false;
    }

    onRowSelectCRUD(event: any): void {
        this.newBrowser = false;
        this.browser = Object.assign({}, event.data);
        this.displayDialog = true;
    }

    findSelectedBrowserIndex(): number {
        return this.browsers.indexOf(this.selectedBrowser);
    }

    selectBrowser(browser: Browser): void {
        this.messageService.add({severity: 'info', summary: 'Browser selected', detail: 'Browser: ' + browser.browser});
    }

    toggle(): void {
        this.stacked = !this.stacked;
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
