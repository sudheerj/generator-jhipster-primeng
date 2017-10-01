import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {InputMaskModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    InputMaskDemoComponent,
    inputmaskDemoRoute
} from './';

const primeng_STATES = [
    inputmaskDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        InputMaskModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        InputMaskDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>InputMaskDemoModule {}
