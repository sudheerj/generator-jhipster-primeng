import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/components/menubar/menubar';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    MenuBarDemoComponent,
    menubarDemoRoute
} from './';

const primeng_STATES = [
    menubarDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        MenubarModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        InputTextModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        MenuBarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>MenuBarDemoModule {}
