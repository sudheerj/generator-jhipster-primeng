import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {OverlayPanelModule} from 'primeng/components/overlaypanel/overlaypanel';
import {DataTableModule} from 'primeng/components/datatable/datatable';
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
        <%= angular2AppName %>SharedModule,
        ButtonModule,
        OverlayPanelModule,
        DataTableModule,
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
export class <%= angular2AppName %>OverlayPanelDemoModule {}
