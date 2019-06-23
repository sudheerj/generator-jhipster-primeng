import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InplaceModule} from 'primeng/components/inplace/inplace';
import {TableModule} from 'primeng/components/table/table';
import {BrowserService} from './service/browser.service';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    InplaceDemoComponent,
    inplaceDemoRoute
} from './';

const primeng_STATES = [
    inplaceDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        InplaceModule,
        TableModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        InplaceDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>InplaceDemoModule {}
