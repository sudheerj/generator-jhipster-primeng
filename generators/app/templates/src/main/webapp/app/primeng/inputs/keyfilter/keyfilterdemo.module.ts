import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {KeyFilterModule} from 'primeng/keyfilter';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    KeyFilterDemoComponent,
    keyFilterDemoRoute
} from './';

const primeng_STATES = [
    keyFilterDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        InputTextModule,
        ToastModule,
        ButtonModule,
        WizardModule,
        KeyFilterModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        KeyFilterDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>KeyFilterDemoModule {}
