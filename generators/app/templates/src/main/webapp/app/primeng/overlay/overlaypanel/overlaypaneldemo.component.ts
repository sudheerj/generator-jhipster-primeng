import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';
import {ScoreService} from './service/score.service';
import Score from './service/score';
import {OverlayPanel} from 'primeng/overlaypanel';

@Component({
    selector: 'jhi-overlaypanel',
    templateUrl: './overlaypaneldemo.component.html',
    styles: []
})
export class OverlayPanelDemoComponent implements OnInit {
    scores: Score[];

    marks: string;
    percentage: string;
    activeIndex = 0;

    constructor(private scoreService: ScoreService, private messageService: MessageService) {
        this.scores = [];
        this.marks = '';
        this.percentage = '';
        this.activeIndex = 0;
    }

    selectScore(event: any, score: Score, overlaypanel: OverlayPanel) {
        this.marks = score.marks;
        this.percentage = score.percentage;
        overlaypanel.toggle(event);
    }

    ngOnInit() {
        this.scoreService.getScores().subscribe((scores: any) => this.scores = scores.data);
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    onShow() {
        this.messageService.add({severity: 'info', summary: 'Show dialog', detail: 'Overlay shown'});
    }

    onHide() {
        this.messageService.add({severity: 'info', summary: 'Hide dialog', detail: 'Overlay hide'});
    }

}
