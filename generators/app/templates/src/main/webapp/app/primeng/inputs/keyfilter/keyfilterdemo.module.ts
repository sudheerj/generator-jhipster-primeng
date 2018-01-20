import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {KeyFilterModule} from 'primeng/components/keyfilter/keyfilter';
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
        <%= angular2AppName %>SharedModule,
        FormsModule,
        InputTextModule,
        GrowlModule,
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
export class <%= angular2AppName %>KeyFilterDemoModule {}
