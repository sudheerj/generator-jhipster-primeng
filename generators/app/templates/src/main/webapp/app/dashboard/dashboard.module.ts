
import { <%= angular2AppName %>ButtonDemoModule } from './buttons/button/buttondemo.module';
import { <%= angular2AppName %>SplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

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

        <%= angular2AppName %>BarchartDemoModule,
        <%= angular2AppName %>DoughnutchartDemoModule,
        <%= angular2AppName %>LinechartDemoModule,
        <%= angular2AppName %>PiechartDemoModule,
        <%= angular2AppName %>PolarareachartDemoModule,
        <%= angular2AppName %>RadarchartDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DashboardModule {}
