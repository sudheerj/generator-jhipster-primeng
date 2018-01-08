import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/components/panel/panel';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {TriStateCheckboxModule} from 'primeng/components/tristatecheckbox/tristatecheckbox';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    ValidationDemoComponent,
    validationDemoRoute
} from './';

const primeng_STATES = [
    validationDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        CheckboxModule,
        TriStateCheckboxModule,
        WizardModule,
        ReactiveFormsModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputMaskModule,
        InputTextareaModule,
        ButtonModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ValidationDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>ValidationDemoModule {}
