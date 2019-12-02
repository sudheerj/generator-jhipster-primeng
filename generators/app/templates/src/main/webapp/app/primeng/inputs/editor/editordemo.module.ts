import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/components/editor/editor';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {SharedModule} from 'primeng/components/common/shared';

import {
    EditorDemoComponent,
    editorDemoRoute
} from './';

const PRIMENG_STATES = [
    editorDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        EditorModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        SharedModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        EditorDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>EditorDemoModule {}
