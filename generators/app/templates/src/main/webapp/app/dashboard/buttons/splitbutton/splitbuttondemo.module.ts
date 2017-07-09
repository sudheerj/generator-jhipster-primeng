import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {SplitButtonModule} from 'primeng/primeng';

import {
    SplitbuttonDemoComponent,
    splitbuttonDemoRoute
} from '../../buttons/splitbutton/';

const DASHBOARD_STATES = [
    splitbuttonDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        SplitButtonModule,
        RouterModule.forRoot(DASHBOARD_STATES, { useHash: true })
    ],
    declarations: [
        SplitbuttonDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>SplitbuttonDemoModule {}
