import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {VCardService} from './service/vcard.service';

import {
    OrgChartDemoComponent,
    orgchartDemoRoute
} from './';

const PRIMENG_STATES = [
    orgchartDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        OrganizationChartModule,
        WizardModule,
        ToastModule,
        DialogModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, VCardService],
    declarations: [
        OrgChartDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>OrgChartDemoModule {}
