import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {PaginatorModule} from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    PaginatorDemoComponent,
    paginatorDemoRoute
} from './';

const primeng_STATES = [
    paginatorDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        PaginatorModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        PaginatorDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>PaginatorDemoModule {}
