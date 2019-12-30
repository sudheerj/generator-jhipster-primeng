import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    ChipsDemoComponent,
    chipsDemoRoute
} from './';

const primeng_STATES = [
    chipsDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        ChipsModule,
        ToastModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ChipsDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>ChipsDemoModule {}
