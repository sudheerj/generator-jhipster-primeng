import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InplaceModule} from 'primeng/components/inplace/inplace';
import {DataTableModule} from 'primeng/components/datatable/datatable';
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
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        InplaceModule,
        DataTableModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        InplaceDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>InplaceDemoModule {}
