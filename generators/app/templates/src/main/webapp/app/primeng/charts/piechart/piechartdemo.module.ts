import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'primeng/chart';

import {
    PiechartDemoComponent,
    piechartDemoRoute
} from '../../charts/piechart';

const PRIMENG_STATES = [
    piechartDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ChartModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        PiechartDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>PiechartDemoModule {}
