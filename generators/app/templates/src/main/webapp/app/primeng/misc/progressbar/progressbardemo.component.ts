import { Component, OnInit, OnDestroy } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
    selector: 'jhi-progressbar',
    templateUrl: './progressbardemo.component.html',
    styles: []
})
export class ProgressBarDemoComponent implements OnInit, OnDestroy {
    activeIndex = 0;
    msgs: Message[] = [];

    value: number;
    interval$: Subscription;

    ngOnInit() {
        const interval = Observable.interval(800).take(100);
        this.interval$ = interval.subscribe(
            (x) => this.value = x + 1,
            () => {/** no error handling */ },
            () => this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process completed'}]
        );
    }

    ngOnDestroy() {
        this.interval$.unsubscribe();
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
