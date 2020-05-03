import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {GMapModule} from 'primeng/gmap';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/api';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    GmapDemoComponent,
    gmapDemoRoute
} from './';

const PRIMENG_STATES = [
    gmapDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        FormsModule,
        GMapModule,
        WizardModule,
        DialogModule,
        CheckboxModule,
        ToastModule,
        ButtonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        GmapDemoComponent
    ],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>GmapDemoModule {}
