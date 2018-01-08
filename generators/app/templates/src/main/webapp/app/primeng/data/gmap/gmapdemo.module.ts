import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GMapModule} from 'primeng/components/gmap/gmap';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {ButtonModule} from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    GmapDemoComponent,
    gmapDemoRoute
} from './';

const primeng_STATES = [
    gmapDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        BrowserModule,
        FormsModule,
        GMapModule,
        WizardModule,
        DialogModule,
        CheckboxModule,
        ButtonModule,
        BrowserAnimationsModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        GmapDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>GmapDemoModule {}
