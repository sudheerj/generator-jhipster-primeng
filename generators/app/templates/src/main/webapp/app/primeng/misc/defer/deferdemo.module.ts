import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';

import {DeferModule} from 'primeng/primeng';
import {BrowserService} from './section/service/browser.service';


import {
    DeferDemoComponent,
    deferDemoRoute
} from './';

const primeng_STATES = [
    deferDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        DataTableModule,
        DeferModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DeferDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},BrowserService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DeferDemoModule {}
