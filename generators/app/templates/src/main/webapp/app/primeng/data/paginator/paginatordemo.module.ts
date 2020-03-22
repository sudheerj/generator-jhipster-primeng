import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {PaginatorModule} from 'primeng/paginator';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    PaginatorDemoComponent,
    paginatorDemoRoute
} from './';

const PRIMENG_STATES = [
    paginatorDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        PaginatorModule,
        WizardModule,
        ToastModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        PaginatorDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>PaginatorDemoModule {}
