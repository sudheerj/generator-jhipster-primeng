import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'primeng/chart';

import {
    LinechartDemoComponent,
    linechartDemoRoute
} from '../../charts/linechart';

const primeng_STATES = [
    linechartDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ChartModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        LinechartDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>LinechartDemoModule {}
