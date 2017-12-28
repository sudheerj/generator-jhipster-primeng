import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';
import {ScoreService} from './service/score.service';
import Score from './service/score';
import {OverlayPanel} from 'primeng/components/overlaypanel/overlaypanel';

@Component({
    selector: 'jhi-overlaypanel',
    templateUrl: './overlaypaneldemo.component.html',
    styles: []
})
export class OverlayPanelDemoComponent implements OnInit {
    scores: Score[];

    marks: string;
    percentage: string;
    msgs: Message[] = [];
    activeIndex = 0;

    constructor(private scoreService: ScoreService) { }

    selectScore(event: any, score: Score, overlaypanel: OverlayPanel) {
        this.marks = score.marks;
        this.percentage = score.percentage;
        overlaypanel.toggle(event);
    }

    ngOnInit() {
        this.scoreService.getScores().subscribe((scores: Score[]) => this.scores = scores);
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    onBeforeShow() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Show dialog', detail: 'Before shown'});
    }

    onAfterShow() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Show dialog', detail: 'After shown'});
    }

    onBeforeHide() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Hide dialog', detail: 'Before hide'});
    }

    onAfterHide() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Hide dialog', detail: 'After hide'});
    }

}
