import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {OverlayPanelModule} from 'primeng/components/overlaypanel/overlaypanel';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
    OverlayPanelDemoComponent,
    overlaypanelRoute
} from './';

const primeng_STATES = [
    overlaypanelRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        ButtonModule,
        OverlayPanelModule,
        DataTableModule,
        GrowlModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        OverlayPanelDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>OverlayPanelDemoModule {}
