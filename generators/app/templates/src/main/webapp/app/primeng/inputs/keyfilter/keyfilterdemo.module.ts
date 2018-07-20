import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
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
        <%= angularXAppName %>SharedModule,
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
export class <%= angularXAppName %>KeyFilterDemoModule {}
