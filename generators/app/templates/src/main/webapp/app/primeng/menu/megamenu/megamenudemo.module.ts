import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/components/megamenu/megamenu';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    MegaMenuDemoComponent,
    megamenuDemoRoute
} from './';

const primeng_STATES = [
    megamenuDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        MegaMenuModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        InputTextModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        MegaMenuDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>MegaMenuDemoModule {}
