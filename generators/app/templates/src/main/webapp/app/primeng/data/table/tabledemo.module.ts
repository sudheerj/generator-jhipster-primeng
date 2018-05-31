import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {ButtonModule} from 'primeng/components/button/button';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {SliderModule} from 'primeng/components/slider/slider';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {GrowlModule} from 'primeng/components/growl/growl';
import { TableModule } from 'primeng/components/table/table';
import {BrowserService} from './service/browser.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {
    TableDemoComponent,
    tableDemoRoute
} from './';

const primeng_STATES = [
    tableDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        ContextMenuModule,
        SliderModule,
        DropdownModule,
        MultiSelectModule,
        TableModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TableDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>TableDemoModule {}
