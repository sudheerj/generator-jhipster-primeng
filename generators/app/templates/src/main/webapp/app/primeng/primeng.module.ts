
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { <%= angularXAppName %>ButtonDemoModule } from './buttons/button/buttondemo.module';
import { <%= angularXAppName %>SplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { <%= angularXAppName %>DialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { <%= angularXAppName %>ConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { <%= angularXAppName %>LightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { <%= angularXAppName %>TooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { <%= angularXAppName %>OverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { <%= angularXAppName %>SideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { <%= angularXAppName %>KeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { <%= angularXAppName %>InputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { <%= angularXAppName %>InputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { <%= angularXAppName %>InputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { <%= angularXAppName %>CalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { <%= angularXAppName %>CheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { <%= angularXAppName %>ChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { <%= angularXAppName %>ColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { <%= angularXAppName %>InputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { <%= angularXAppName %>InputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { <%= angularXAppName %>PasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { <%= angularXAppName %>AutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { <%= angularXAppName %>SliderDemoModule } from './inputs/slider/sliderdemo.module';
import { <%= angularXAppName %>SpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { <%= angularXAppName %>RatingDemoModule } from './inputs/rating/ratingdemo.module';
import { <%= angularXAppName %>SelectDemoModule } from './inputs/select/selectdemo.module';
import { <%= angularXAppName %>SelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { <%= angularXAppName %>ListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { <%= angularXAppName %>RadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { <%= angularXAppName %>ToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { <%= angularXAppName %>EditorDemoModule } from './inputs/editor/editordemo.module';

import { <%= angularXAppName %>GrowlDemoModule } from './messages/growl/growldemo.module';
import { <%= angularXAppName %>MessagesDemoModule } from './messages/messages/messagesdemo.module';
import { <%= angularXAppName %>ToastDemoModule } from './messages/toast/toastdemo.module';
import { <%= angularXAppName %>GalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { <%= angularXAppName %>FileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { <%= angularXAppName %>AccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { <%= angularXAppName %>PanelDemoModule } from './panel/panel/paneldemo.module';
import { <%= angularXAppName %>TabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { <%= angularXAppName %>FieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { <%= angularXAppName %>ToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { <%= angularXAppName %>ScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { <%= angularXAppName %>CardDemoModule } from './panel/card/carddemo.module';
import { <%= angularXAppName %>FlexGridDemoModule } from './panel/flexgrid/flexgriddemo.module';

import { <%= angularXAppName %>TableDemoModule } from './data/table/tabledemo.module';
import { <%= angularXAppName %>VirtualScrollerDemoModule } from './data/virtualscroller/virtualscrollerdemo.module';
import { <%= angularXAppName %>PickListDemoModule } from './data/picklist/picklistdemo.module';
import { <%= angularXAppName %>OrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { <%= angularXAppName %>FullCalendarDemoModule } from './data/fullcalendar/fullcalendardemo.module';
import { <%= angularXAppName %>TreeDemoModule } from './data/tree/treedemo.module';
import { <%= angularXAppName %>TreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { <%= angularXAppName %>PaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { <%= angularXAppName %>GmapDemoModule } from './data/gmap/gmapdemo.module';
import { <%= angularXAppName %>OrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { <%= angularXAppName %>CarouselDemoModule } from './data/carousel/carouseldemo.module';
import { <%= angularXAppName %>DataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { <%= angularXAppName %>BarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { <%= angularXAppName %>DoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { <%= angularXAppName %>LinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { <%= angularXAppName %>PiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { <%= angularXAppName %>PolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { <%= angularXAppName %>RadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { <%= angularXAppName %>DragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { <%= angularXAppName %>MenuDemoModule } from './menu/menu/menudemo.module';
import { <%= angularXAppName %>ContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { <%= angularXAppName %>PanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { <%= angularXAppName %>StepsDemoModule } from './menu/steps/stepsdemo.module';
import { <%= angularXAppName %>TieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { <%= angularXAppName %>BreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { <%= angularXAppName %>MegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { <%= angularXAppName %>MenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { <%= angularXAppName %>SlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { <%= angularXAppName %>TabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { <%= angularXAppName %>BlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { <%= angularXAppName %>CaptchaDemoModule } from './misc/captcha/captchademo.module';
import { <%= angularXAppName %>DeferDemoModule } from './misc/defer/deferdemo.module';
import { <%= angularXAppName %>InplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { <%= angularXAppName %>ProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { <%= angularXAppName %>RTLDemoModule } from './misc/rtl/rtldemo.module';
import { <%= angularXAppName %>TerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { <%= angularXAppName %>ValidationDemoModule } from './misc/validation/validationdemo.module';
import { <%= angularXAppName %>ProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        <%= angularXAppName %>MenuDemoModule,
        <%= angularXAppName %>ContextMenuDemoModule,
        <%= angularXAppName %>PanelMenuDemoModule,
        <%= angularXAppName %>StepsDemoModule,
        <%= angularXAppName %>TieredMenuDemoModule,
        <%= angularXAppName %>BreadcrumbDemoModule,
        <%= angularXAppName %>MegaMenuDemoModule,
        <%= angularXAppName %>MenuBarDemoModule,
        <%= angularXAppName %>SlideMenuDemoModule,
        <%= angularXAppName %>TabMenuDemoModule,

        <%= angularXAppName %>BlockUIDemoModule,
        <%= angularXAppName %>CaptchaDemoModule,
        <%= angularXAppName %>DeferDemoModule,
        <%= angularXAppName %>InplaceDemoModule,
        <%= angularXAppName %>ProgressBarDemoModule,
        <%= angularXAppName %>InputMaskDemoModule,
        <%= angularXAppName %>RTLDemoModule,
        <%= angularXAppName %>TerminalDemoModule,
        <%= angularXAppName %>ValidationDemoModule,

        <%= angularXAppName %>ButtonDemoModule,
        <%= angularXAppName %>SplitbuttonDemoModule,

        <%= angularXAppName %>InputTextDemoModule,
        <%= angularXAppName %>InputTextAreaDemoModule,
        <%= angularXAppName %>InputGroupDemoModule,
        <%= angularXAppName %>CalendarDemoModule,
        <%= angularXAppName %>ChipsDemoModule,
        <%= angularXAppName %>InputMaskDemoModule,
        <%= angularXAppName %>InputSwitchDemoModule,
        <%= angularXAppName %>PasswordIndicatorDemoModule,
        <%= angularXAppName %>AutoCompleteDemoModule,
        <%= angularXAppName %>SliderDemoModule,
        <%= angularXAppName %>SpinnerDemoModule,
        <%= angularXAppName %>RatingDemoModule,
        <%= angularXAppName %>SelectDemoModule,
        <%= angularXAppName %>SelectButtonDemoModule,
        <%= angularXAppName %>ListboxDemoModule,
        <%= angularXAppName %>RadioButtonDemoModule,
        <%= angularXAppName %>ToggleButtonDemoModule,
        <%= angularXAppName %>EditorDemoModule,
        <%= angularXAppName %>ColorPickerDemoModule,
        <%= angularXAppName %>CheckboxDemoModule,
        <%= angularXAppName %>KeyFilterDemoModule,

        <%= angularXAppName %>GrowlDemoModule,
        <%= angularXAppName %>MessagesDemoModule,
        /*<%= angularXAppName %>ToastDemoModule,*/
        <%= angularXAppName %>GalleriaDemoModule,

        <%= angularXAppName %>FileUploadDemoModule,

        <%= angularXAppName %>AccordionDemoModule,
        <%= angularXAppName %>PanelDemoModule,
        <%= angularXAppName %>TabViewDemoModule,
        <%= angularXAppName %>FieldsetDemoModule,
        <%= angularXAppName %>ToolbarDemoModule,
        <%= angularXAppName %>ScrollPanelDemoModule,
        <%= angularXAppName %>CardDemoModule,
        <%= angularXAppName %>FlexGridDemoModule,

        <%= angularXAppName %>BarchartDemoModule,
        <%= angularXAppName %>DoughnutchartDemoModule,
        <%= angularXAppName %>LinechartDemoModule,
        <%= angularXAppName %>PiechartDemoModule,
        <%= angularXAppName %>PolarareachartDemoModule,
        <%= angularXAppName %>RadarchartDemoModule,

        <%= angularXAppName %>DragDropDemoModule,

        <%= angularXAppName %>DialogDemoModule,
        <%= angularXAppName %>ConfirmDialogDemoModule,
        <%= angularXAppName %>LightboxDemoModule,
        <%= angularXAppName %>TooltipDemoModule,
        <%= angularXAppName %>OverlayPanelDemoModule,
        <%= angularXAppName %>SideBarDemoModule,

        <%= angularXAppName %>TableDemoModule,
        <%= angularXAppName %>DataViewDemoModule,
        <%= angularXAppName %>VirtualScrollerDemoModule,
        <%= angularXAppName %>FullCalendarDemoModule,
        <%= angularXAppName %>OrderListDemoModule,
        <%= angularXAppName %>PickListDemoModule,
        <%= angularXAppName %>TreeDemoModule,
        <%= angularXAppName %>TreeTableDemoModule,
        <%= angularXAppName %>PaginatorDemoModule,
        <%= angularXAppName %>OrgChartDemoModule,
        <%= angularXAppName %>GmapDemoModule,
        <%= angularXAppName %>CarouselDemoModule,
        <%= angularXAppName %>ProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>primengModule {}
