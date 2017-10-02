import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {MessagesModule} from 'primeng/components/messages/messages';
import {BlockUIModule} from 'primeng/components/blockui/blockui';


import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';
import {fakeBackendProvider} from './backend/fake-backend';
import {EmployeeService} from './service/employee.service';

import {
    BlockUIDemoComponent,
    blockuiDemoRoute
} from './';

const primeng_STATES = [
    blockuiDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ButtonModule,
        InputTextModule,
        DataTableModule,
        DialogModule,
        MessagesModule,
        BlockUIModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        BlockUIDemoComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EmployeeService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>BlockUIDemoModule {}
