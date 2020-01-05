import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    TabMenuDemoComponent,
    tabmenuDemoRoute
} from './';

import { OverviewComponent } from './pages/overview.component';
import { DownloadsComponent } from './pages/downloads.component';

const primeng_STATES = [
    tabmenuDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        TabMenuModule,
        ToastModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TabMenuDemoComponent,
        OverviewComponent,
        DownloadsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>TabMenuDemoModule {}
