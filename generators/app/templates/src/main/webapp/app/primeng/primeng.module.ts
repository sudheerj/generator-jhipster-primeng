
import { <%= angular2AppName %>ButtonDemoModule } from './buttons/button/buttondemo.module';
import { <%= angular2AppName %>SplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { <%= angular2AppName %>DialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { <%= angular2AppName %>ConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';

import { <%= angular2AppName %>InputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { <%= angular2AppName %>InputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { <%= angular2AppName %>InputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';

import { <%= angular2AppName %>GrowlDemoModule } from './messages/growl/growldemo.module';
import { <%= angular2AppName %>MessagesDemoModule } from './messages/messages/messagesdemo.module';
import { <%= angular2AppName %>GalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { <%= angular2AppName %>FileUploadDemoModule } from './file/fileupload/fileuploaddemo.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { <%= angular2AppName %>BarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { <%= angular2AppName %>DoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { <%= angular2AppName %>LinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { <%= angular2AppName %>PiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { <%= angular2AppName %>PolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { <%= angular2AppName %>RadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

@NgModule({
    imports: [

        <%= angular2AppName %>ButtonDemoModule,
        <%= angular2AppName %>SplitbuttonDemoModule,

        <%= angular2AppName %>InputTextDemoModule,
        <%= angular2AppName %>InputTextAreaDemoModule,
        <%= angular2AppName %>InputGroupDemoModule,

        <%= angular2AppName %>GrowlDemoModule,
        <%= angular2AppName %>MessagesDemoModule,
        <%= angular2AppName %>GalleriaDemoModule,

        <%= angular2AppName %>FileUploadDemoModule,

        <%= angular2AppName %>BarchartDemoModule,
        <%= angular2AppName %>DoughnutchartDemoModule,
        <%= angular2AppName %>LinechartDemoModule,
        <%= angular2AppName %>PiechartDemoModule,
        <%= angular2AppName %>PolarareachartDemoModule,
        <%= angular2AppName %>RadarchartDemoModule,

        <%= angular2AppName %>DialogDemoModule,
        <%= angular2AppName %>ConfirmDialogDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>primengModule {}
