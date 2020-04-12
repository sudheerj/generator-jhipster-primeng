import { Component, OnInit, OnDestroy } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import { interval } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
    selector: 'jhi-progressbar',
    templateUrl: './progressbardemo.component.html',
    styles: []
})
export class ProgressBarDemoComponent implements OnInit, OnDestroy {
    activeIndex = 0;

    value: number;
    interval$: Subscription;

    constructor(private messageService: MessageService) {
        this.value = 0;
        this.interval$ = null;
    }

    ngOnInit(): void {
        const intervalObject = interval(800).take(100);
        this.interval$ = intervalObject.subscribe(
            x => this.value = x + 1,
            () => {/** no error handling */ },
            () => this.messageService = [{severity: 'info', summary: 'Success', detail: 'Process completed'}]
        );
    }

    ngOnDestroy(): void {
        this.interval$.unsubscribe();
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
