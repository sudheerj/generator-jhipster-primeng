import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {SharedModule} from 'primeng/shared';

import {
    EditorDemoComponent,
    editorDemoRoute
} from './';

const primeng_STATES = [
    editorDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        EditorModule,
        ToastModule,
        ButtonModule,
        WizardModule,
        SharedModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        EditorDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>EditorDemoModule {}
