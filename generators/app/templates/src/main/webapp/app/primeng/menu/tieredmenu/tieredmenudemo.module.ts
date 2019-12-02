import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {GrowlModule} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/components/tieredmenu/tieredmenu';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    TieredMenuDemoComponent,
    tieredmenuDemoRoute
} from './';

const PRIMENG_STATES = [
    tieredmenuDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        TieredMenuModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        TieredMenuDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>TieredMenuDemoModule {}
