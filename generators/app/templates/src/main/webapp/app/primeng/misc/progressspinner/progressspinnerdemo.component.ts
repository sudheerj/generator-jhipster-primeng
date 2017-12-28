import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
    selector: 'jhi-progressspinner',
    templateUrl: './progressspinnerdemo.component.html',
    styles: []
})
export class ProgressSpinnerDemoComponent implements OnInit {
    activeIndex = 0;
    msgs: Message[] = [];

    ngOnInit() {

    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
