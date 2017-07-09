import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'jhi-polarareachart',
    templateUrl: '../../charts/polarareachart/polarareachartdemo.component.html',
    styles: []
})
export class PolarareachartDemoComponent implements OnInit {
    data: any;

    constructor() {
        this.data = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    '#FF6384',
                    '#4BC0C0',
                    '#FFCE56',
                    '#E7E9ED',
                    '#36A2EB'
                ],
                label: 'My dataset'
            }],
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ]
        };
    }

    ngOnInit() {
    }
}
