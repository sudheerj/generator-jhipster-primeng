import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {GrowlModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {TableModule} from 'primeng/components/table/table';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {EmployeeService} from './service/employee.service';

import {
    ContextMenuDemoComponent,
    contextmenuDemoRoute
} from './';

const PRIMENG_STATES = [
    contextmenuDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ContextMenuModule,
        GrowlModule,
        TableModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        ContextMenuDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, EmployeeService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>ContextMenuDemoModule {}
