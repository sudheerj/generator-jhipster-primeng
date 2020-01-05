import {Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'jhi-toolbar',
    templateUrl: './toolbardemo.component.html',
    styles: []
})
export class ToolbarDemoComponent implements OnInit {
    items: MenuItem[];
    search: string;
    ngOnInit() {
        this.items = [
            {label: 'Cut', icon: 'fa fa-cut'},
            {label: 'Copy', icon: 'fa fa-copy'},
            {label: 'Paste', icon: 'fa fa-paste'},
        ];
    }

    constructor() {
        this.search ='';
    }
}
