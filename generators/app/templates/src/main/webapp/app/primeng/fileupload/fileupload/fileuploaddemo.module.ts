import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {CheckboxModule} from 'primeng/checkbox';
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
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        FileUploadModule,
        CheckboxModule,
        ToastModule,
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
export class <%= angularXAppName %>FileUploadDemoModule {}
