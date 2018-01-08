import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ConfirmationService} from 'primeng/components/common/api';
import {APP_BASE_HREF} from '@angular/common';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    ConfirmDialogDemoComponent,
    confirmDialogDemoRoute
} from './';

const primeng_STATES = [
    confirmDialogDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        ConfirmDialogModule,
        BrowserAnimationsModule,
        GrowlModule,
        WizardModule,
        ButtonModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ConfirmDialogDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, ConfirmationService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>ConfirmDialogDemoModule {}
