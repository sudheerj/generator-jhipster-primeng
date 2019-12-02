import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'primeng/components/colorpicker/colorpicker';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    ColorpickerDemoComponent,
    colorpickerDemoRoute
} from './';

const PRIMENG_STATES = [
    colorpickerDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        ColorPickerModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        ColorpickerDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>ColorPickerDemoModule {}
