import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {GrowlModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/components/megamenu/megamenu';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    MegaMenuDemoComponent,
    megamenuDemoRoute
} from './';

const PRIMENG_STATES = [
    megamenuDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        MegaMenuModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        InputTextModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        MegaMenuDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>MegaMenuDemoModule {}
