import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule}    from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    InputTextDemoComponent,
    inputTextDemoRoute
} from './';

const primeng_STATES = [
    inputTextDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        InputTextDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>InputTextDemoModule {}
