import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/components/breadcrumb/breadcrumb';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    BreadcrumbDemoComponent,
    breadcrumbDemoRoute
} from './';

const primeng_STATES = [
    breadcrumbDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        BreadcrumbModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        BreadcrumbDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>BreadcrumbDemoModule {}
