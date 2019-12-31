import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-rtl',
    templateUrl: './rtldemo.component.html',
    styles: []
})
export class RTLDemoComponent implements OnInit {
    activeIndex = 0;

    ngOnInit() {

    }

    constructor(private messageService: MessageService) {
    }

}
