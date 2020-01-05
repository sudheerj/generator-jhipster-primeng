import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {TreeNodeService} from './service/treenode.service';

import {
    TreeTableDemoComponent,
    treetableDemoRoute
} from './';

const primeng_STATES = [
    treetableDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TreeTableModule,
        ButtonModule,
        ContextMenuModule,
        WizardModule,
        ToastModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TreeTableDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, TreeNodeService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>TreeTableDemoModule {}
