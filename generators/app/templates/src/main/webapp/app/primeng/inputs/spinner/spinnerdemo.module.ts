import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {SpinnerModule} from 'primeng/components/spinner/spinner';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    SpinnerDemoComponent,
    spinnerDemoRoute
} from './';

const primeng_STATES = [
    spinnerDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        SpinnerModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        SpinnerDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>SpinnerDemoModule {}
