import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'primeng/chart';

import {
    RadarchartDemoComponent,
    radarchartDemoRoute
} from '../../charts/radarchart';

const primeng_STATES = [
    radarchartDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ChartModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        RadarchartDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>RadarchartDemoModule {}
