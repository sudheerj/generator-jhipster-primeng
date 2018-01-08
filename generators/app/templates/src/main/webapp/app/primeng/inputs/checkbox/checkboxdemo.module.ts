import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {TriStateCheckboxModule} from 'primeng/components/tristatecheckbox/tristatecheckbox';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    CheckboxDemoComponent,
    checkboxDemoRoute
} from './';

const primeng_STATES = [
    checkboxDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        CheckboxModule,
        GrowlModule,
        TriStateCheckboxModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        CheckboxDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>CheckboxDemoModule {}
