import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/components/menu/menu';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {
    ContextMenuDemoComponent,
    contextmenuDemoRoute
} from './';

const primeng_STATES = [
    contextmenuDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ContextMenuModule,
        GrowlModule,
        DataTableModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ContextMenuDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>ContextMenuDemoModule {}
