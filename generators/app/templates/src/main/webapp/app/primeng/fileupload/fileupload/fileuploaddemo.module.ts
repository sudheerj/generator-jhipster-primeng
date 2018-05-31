import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/components/fileupload/fileupload';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import {
    FileUploadDemoComponent,
    fileuploadDemoRoute
} from './';

const primeng_STATES = [
    fileuploadDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        FileUploadModule,
        CheckboxModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        FileUploadDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>FileUploadDemoModule {}
