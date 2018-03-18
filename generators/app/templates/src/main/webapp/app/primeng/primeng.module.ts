
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { <%= angular2AppName %>ButtonDemoModule } from './buttons/button/buttondemo.module';
import { <%= angular2AppName %>SplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { <%= angular2AppName %>DialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { <%= angular2AppName %>ConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { <%= angular2AppName %>LightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { <%= angular2AppName %>TooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { <%= angular2AppName %>OverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { <%= angular2AppName %>SideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { <%= angular2AppName %>KeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { <%= angular2AppName %>InputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { <%= angular2AppName %>InputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { <%= angular2AppName %>InputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { <%= angular2AppName %>CalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { <%= angular2AppName %>CheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { <%= angular2AppName %>ChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { <%= angular2AppName %>ColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { <%= angular2AppName %>InputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { <%= angular2AppName %>InputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { <%= angular2AppName %>PasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { <%= angular2AppName %>AutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { <%= angular2AppName %>SliderDemoModule } from './inputs/slider/sliderdemo.module';
import { <%= angular2AppName %>SpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { <%= angular2AppName %>RatingDemoModule } from './inputs/rating/ratingdemo.module';
import { <%= angular2AppName %>SelectDemoModule } from './inputs/select/selectdemo.module';
import { <%= angular2AppName %>SelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { <%= angular2AppName %>ListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { <%= angular2AppName %>RadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { <%= angular2AppName %>ToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { <%= angular2AppName %>EditorDemoModule } from './inputs/editor/editordemo.module';

import { <%= angular2AppName %>GrowlDemoModule } from './messages/growl/growldemo.module';
import { <%= angular2AppName %>MessagesDemoModule } from './messages/messages/messagesdemo.module';
import { <%= angular2AppName %>GalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { <%= angular2AppName %>FileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { <%= angular2AppName %>AccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { <%= angular2AppName %>PanelDemoModule } from './panel/panel/paneldemo.module';
import { <%= angular2AppName %>TabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { <%= angular2AppName %>FieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { <%= angular2AppName %>ToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { <%= angular2AppName %>GridDemoModule } from './panel/grid/griddemo.module';
import { <%= angular2AppName %>ScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { <%= angular2AppName %>CardDemoModule } from './panel/card/carddemo.module';

import { <%= angular2AppName %>DataTableDemoModule } from './data/datatable/datatabledemo.module';
import { <%= angular2AppName %>TableDemoModule } from './data/table/tabledemo.module';
import { <%= angular2AppName %>DataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { <%= angular2AppName %>DataListDemoModule } from './data/datalist/datalistdemo.module';
import { <%= angular2AppName %>DataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { <%= angular2AppName %>PickListDemoModule } from './data/picklist/picklistdemo.module';
import { <%= angular2AppName %>OrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { <%= angular2AppName %>ScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { <%= angular2AppName %>TreeDemoModule } from './data/tree/treedemo.module';
import { <%= angular2AppName %>TreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { <%= angular2AppName %>PaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { <%= angular2AppName %>GmapDemoModule } from './data/gmap/gmapdemo.module';
import { <%= angular2AppName %>OrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { <%= angular2AppName %>CarouselDemoModule } from './data/carousel/carouseldemo.module';
import { <%= angular2AppName %>DataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { <%= angular2AppName %>BarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { <%= angular2AppName %>DoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { <%= angular2AppName %>LinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { <%= angular2AppName %>PiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { <%= angular2AppName %>PolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { <%= angular2AppName %>RadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { <%= angular2AppName %>DragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { <%= angular2AppName %>MenuDemoModule } from './menu/menu/menudemo.module';
import { <%= angular2AppName %>ContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { <%= angular2AppName %>PanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { <%= angular2AppName %>StepsDemoModule } from './menu/steps/stepsdemo.module';
import { <%= angular2AppName %>TieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { <%= angular2AppName %>BreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { <%= angular2AppName %>MegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { <%= angular2AppName %>MenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { <%= angular2AppName %>SlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { <%= angular2AppName %>TabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { <%= angular2AppName %>BlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { <%= angular2AppName %>CaptchaDemoModule } from './misc/captcha/captchademo.module';
import { <%= angular2AppName %>DeferDemoModule } from './misc/defer/deferdemo.module';
import { <%= angular2AppName %>InplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { <%= angular2AppName %>ProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { <%= angular2AppName %>RTLDemoModule } from './misc/rtl/rtldemo.module';
import { <%= angular2AppName %>TerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { <%= angular2AppName %>ValidationDemoModule } from './misc/validation/validationdemo.module';
import { <%= angular2AppName %>ProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        <%= angular2AppName %>MenuDemoModule,
        <%= angular2AppName %>ContextMenuDemoModule,
        <%= angular2AppName %>PanelMenuDemoModule,
        <%= angular2AppName %>StepsDemoModule,
        <%= angular2AppName %>TieredMenuDemoModule,
        <%= angular2AppName %>BreadcrumbDemoModule,
        <%= angular2AppName %>MegaMenuDemoModule,
        <%= angular2AppName %>MenuBarDemoModule,
        <%= angular2AppName %>SlideMenuDemoModule,
        <%= angular2AppName %>TabMenuDemoModule,

        <%= angular2AppName %>BlockUIDemoModule,
        <%= angular2AppName %>CaptchaDemoModule,
        <%= angular2AppName %>DeferDemoModule,
        <%= angular2AppName %>InplaceDemoModule,
        <%= angular2AppName %>ProgressBarDemoModule,
        <%= angular2AppName %>InputMaskDemoModule,
        <%= angular2AppName %>RTLDemoModule,
        <%= angular2AppName %>TerminalDemoModule,
        <%= angular2AppName %>ValidationDemoModule,

        <%= angular2AppName %>ButtonDemoModule,
        <%= angular2AppName %>SplitbuttonDemoModule,

        <%= angular2AppName %>InputTextDemoModule,
        <%= angular2AppName %>InputTextAreaDemoModule,
        <%= angular2AppName %>InputGroupDemoModule,
        <%= angular2AppName %>CalendarDemoModule,
        <%= angular2AppName %>ChipsDemoModule,
        <%= angular2AppName %>InputMaskDemoModule,
        <%= angular2AppName %>InputSwitchDemoModule,
        <%= angular2AppName %>PasswordIndicatorDemoModule,
        <%= angular2AppName %>AutoCompleteDemoModule,
        <%= angular2AppName %>SliderDemoModule,
        <%= angular2AppName %>SpinnerDemoModule,
        <%= angular2AppName %>RatingDemoModule,
        <%= angular2AppName %>SelectDemoModule,
        <%= angular2AppName %>SelectButtonDemoModule,
        <%= angular2AppName %>ListboxDemoModule,
        <%= angular2AppName %>RadioButtonDemoModule,
        <%= angular2AppName %>ToggleButtonDemoModule,
        <%= angular2AppName %>EditorDemoModule,
        <%= angular2AppName %>ColorPickerDemoModule,
        <%= angular2AppName %>CheckboxDemoModule,
        <%= angular2AppName %>KeyFilterDemoModule,

        <%= angular2AppName %>GrowlDemoModule,
        <%= angular2AppName %>MessagesDemoModule,
        <%= angular2AppName %>GalleriaDemoModule,

        <%= angular2AppName %>FileUploadDemoModule,

        <%= angular2AppName %>AccordionDemoModule,
        <%= angular2AppName %>PanelDemoModule,
        <%= angular2AppName %>TabViewDemoModule,
        <%= angular2AppName %>FieldsetDemoModule,
        <%= angular2AppName %>ToolbarDemoModule,
        <%= angular2AppName %>GridDemoModule,
        <%= angular2AppName %>ScrollPanelDemoModule,
        <%= angular2AppName %>CardDemoModule,

        <%= angular2AppName %>BarchartDemoModule,
        <%= angular2AppName %>DoughnutchartDemoModule,
        <%= angular2AppName %>LinechartDemoModule,
        <%= angular2AppName %>PiechartDemoModule,
        <%= angular2AppName %>PolarareachartDemoModule,
        <%= angular2AppName %>RadarchartDemoModule,

        <%= angular2AppName %>DragDropDemoModule,

        <%= angular2AppName %>DialogDemoModule,
        <%= angular2AppName %>ConfirmDialogDemoModule,
        <%= angular2AppName %>LightboxDemoModule,
        <%= angular2AppName %>TooltipDemoModule,
        <%= angular2AppName %>OverlayPanelDemoModule,
        <%= angular2AppName %>SideBarDemoModule,

        <%= angular2AppName %>DataTableDemoModule,
        <%= angular2AppName %>TableDemoModule,
        <%= angular2AppName %>DataGridDemoModule,
        <%= angular2AppName %>DataListDemoModule,
        <%= angular2AppName %>DataViewDemoModule,
        <%= angular2AppName %>DataScrollerDemoModule,
        <%= angular2AppName %>ScheduleDemoModule,
        <%= angular2AppName %>OrderListDemoModule,
        <%= angular2AppName %>PickListDemoModule,
        <%= angular2AppName %>TreeDemoModule,
        <%= angular2AppName %>TreeTableDemoModule,
        <%= angular2AppName %>PaginatorDemoModule,
        <%= angular2AppName %>OrgChartDemoModule,
        <%= angular2AppName %>GmapDemoModule,
        <%= angular2AppName %>CarouselDemoModule,
        <%= angular2AppName %>ProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>primengModule {}
