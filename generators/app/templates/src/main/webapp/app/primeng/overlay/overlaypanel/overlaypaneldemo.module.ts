import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {OverlayPanelModule} from 'primeng/components/overlaypanel/overlaypanel';
import {TableModule} from 'primeng/components/table/table';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {ScoreService} from './service/score.service';

import {
    OverlayPanelDemoComponent,
    overlaypanelDemoRoute
} from './';

const primeng_STATES = [
    overlaypanelDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ButtonModule,
        OverlayPanelModule,
        TableModule,
        GrowlModule,
        BrowserAnimationsModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        OverlayPanelDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, ScoreService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>OverlayPanelDemoModule {}
