import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {DataListModule} from 'primeng/components/datalist/datalist';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ButtonModule} from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';
import {BrowserService} from './service/browser.service';
import {APP_BASE_HREF} from '@angular/common';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    DataListDemoComponent,
    datalistDemoRoute
} from './';

const primeng_STATES = [
    datalistDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        ButtonModule,
        DataListModule,
        DialogModule,
        BrowserAnimationsModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DataListDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DataListDemoModule {}
