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
import {ProgressBarModule} from 'primeng/components/progressbar/progressbar';
import {GrowlModule} from 'primeng/components/growl/growl';

import {
    ProgressBarDemoComponent,
    progressbarDemoRoute
} from './';

const PRIMENG_STATES = [
    progressbarDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ProgressBarModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        ProgressBarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>ProgressBarDemoModule {}
