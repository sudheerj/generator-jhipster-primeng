import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
// import needed PrimeNG modules here
import {ProgressSpinnerModule} from 'primeng/components/progressspinner/progressspinner';
import {GrowlModule} from 'primeng/components/growl/growl';

import {
    ProgressSpinnerDemoComponent,
    progressspinnerDemoRoute
} from './';

const PRIMENG_STATES = [
    progressspinnerDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ProgressSpinnerModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        ProgressSpinnerDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>ProgressSpinnerDemoModule {}
