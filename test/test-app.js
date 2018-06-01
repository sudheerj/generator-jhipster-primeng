/* global describe, beforeEach, it*/

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const expectedFiles = {
    primeng: [
        'src/main/webapp/app/primeng/primeng.module.ts',

        'src/main/webapp/app/primeng/inputs/inputtext/index.ts',
        'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.component.html',
        'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/inputgroup/index.ts',
        'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.component.html',
        'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/autocomplete/index.ts',
        'src/main/webapp/app/primeng/inputs/autocomplete/autocompletedemo.component.html',
        'src/main/webapp/app/primeng/inputs/autocomplete/autocompletedemo.component.ts',
        'src/main/webapp/app/primeng/inputs/autocomplete/autocompletedemo.module.ts',
        'src/main/webapp/app/primeng/inputs/autocomplete/autocompletedemo.route.ts',
        'src/main/webapp/app/primeng/inputs/autocomplete/service/country.ts',
        'src/main/webapp/app/primeng/inputs/autocomplete/service/country.service.ts',

        'src/main/webapp/app/primeng/inputs/calendar/index.ts',
        'src/main/webapp/app/primeng/inputs/calendar/calendardemo.component.html',
        'src/main/webapp/app/primeng/inputs/calendar/calendardemo.component.ts',
        'src/main/webapp/app/primeng/inputs/calendar/calendardemo.module.ts',
        'src/main/webapp/app/primeng/inputs/calendar/calendardemo.route.ts',

        'src/main/webapp/app/primeng/inputs/checkbox/index.ts',
        'src/main/webapp/app/primeng/inputs/checkbox/checkboxdemo.component.html',
        'src/main/webapp/app/primeng/inputs/checkbox/checkboxdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/checkbox/checkboxdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/checkbox/checkboxdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/chips/index.ts',
        'src/main/webapp/app/primeng/inputs/chips/chipsdemo.component.html',
        'src/main/webapp/app/primeng/inputs/chips/chipsdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/chips/chipsdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/chips/chipsdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/colorpicker/index.ts',
        'src/main/webapp/app/primeng/inputs/colorpicker/colorpickerdemo.component.html',
        'src/main/webapp/app/primeng/inputs/colorpicker/colorpickerdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/colorpicker/colorpickerdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/colorpicker/colorpickerdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/editor/index.ts',
        'src/main/webapp/app/primeng/inputs/editor/editordemo.component.html',
        'src/main/webapp/app/primeng/inputs/editor/editordemo.component.ts',
        'src/main/webapp/app/primeng/inputs/editor/editordemo.module.ts',
        'src/main/webapp/app/primeng/inputs/editor/editordemo.route.ts',

        'src/main/webapp/app/primeng/inputs/inputmask/index.ts',
        'src/main/webapp/app/primeng/inputs/inputmask/inputmaskdemo.component.html',
        'src/main/webapp/app/primeng/inputs/inputmask/inputmaskdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/inputmask/inputmaskdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/inputmask/inputmaskdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/inputswitch/index.ts',
        'src/main/webapp/app/primeng/inputs/inputswitch/inputswitchdemo.component.html',
        'src/main/webapp/app/primeng/inputs/inputswitch/inputswitchdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/inputswitch/inputswitchdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/inputswitch/inputswitchdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/inputtextarea/index.ts',
        'src/main/webapp/app/primeng/inputs/inputtextarea/inputtextareademo.component.html',
        'src/main/webapp/app/primeng/inputs/inputtextarea/inputtextareademo.component.ts',
        'src/main/webapp/app/primeng/inputs/inputtextarea/inputtextareademo.module.ts',
        'src/main/webapp/app/primeng/inputs/inputtextarea/inputtextareademo.route.ts',

        'src/main/webapp/app/primeng/inputs/listbox/index.ts',
        'src/main/webapp/app/primeng/inputs/listbox/listboxdemo.component.html',
        'src/main/webapp/app/primeng/inputs/listbox/listboxdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/listbox/listboxdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/listbox/listboxdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/passwordindicator/index.ts',
        'src/main/webapp/app/primeng/inputs/passwordindicator/passwordindicatordemo.component.html',
        'src/main/webapp/app/primeng/inputs/passwordindicator/passwordindicatordemo.component.ts',
        'src/main/webapp/app/primeng/inputs/passwordindicator/passwordindicatordemo.module.ts',
        'src/main/webapp/app/primeng/inputs/passwordindicator/passwordindicatordemo.route.ts',

        'src/main/webapp/app/primeng/inputs/radiobutton/index.ts',
        'src/main/webapp/app/primeng/inputs/radiobutton/radiobuttondemo.component.html',
        'src/main/webapp/app/primeng/inputs/radiobutton/radiobuttondemo.component.ts',
        'src/main/webapp/app/primeng/inputs/radiobutton/radiobuttondemo.module.ts',
        'src/main/webapp/app/primeng/inputs/radiobutton/radiobuttondemo.route.ts',

        'src/main/webapp/app/primeng/inputs/rating/index.ts',
        'src/main/webapp/app/primeng/inputs/rating/ratingdemo.component.html',
        'src/main/webapp/app/primeng/inputs/rating/ratingdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/rating/ratingdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/rating/ratingdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/select/index.ts',
        'src/main/webapp/app/primeng/inputs/select/selectdemo.component.html',
        'src/main/webapp/app/primeng/inputs/select/selectdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/select/selectdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/select/selectdemo.route.ts',
        'src/main/webapp/app/primeng/inputs/select/service/country.service.ts',
        'src/main/webapp/app/primeng/inputs/select/service/country.ts',

        'src/main/webapp/app/primeng/inputs/selectbutton/index.ts',
        'src/main/webapp/app/primeng/inputs/selectbutton/selectbuttondemo.component.html',
        'src/main/webapp/app/primeng/inputs/selectbutton/selectbuttondemo.component.ts',
        'src/main/webapp/app/primeng/inputs/selectbutton/selectbuttondemo.module.ts',
        'src/main/webapp/app/primeng/inputs/selectbutton/selectbuttondemo.route.ts',

        'src/main/webapp/app/primeng/inputs/slider/index.ts',
        'src/main/webapp/app/primeng/inputs/slider/sliderdemo.component.html',
        'src/main/webapp/app/primeng/inputs/slider/sliderdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/slider/sliderdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/slider/sliderdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/spinner/index.ts',
        'src/main/webapp/app/primeng/inputs/spinner/spinnerdemo.component.html',
        'src/main/webapp/app/primeng/inputs/spinner/spinnerdemo.component.ts',
        'src/main/webapp/app/primeng/inputs/spinner/spinnerdemo.module.ts',
        'src/main/webapp/app/primeng/inputs/spinner/spinnerdemo.route.ts',

        'src/main/webapp/app/primeng/inputs/togglebutton/index.ts',
        'src/main/webapp/app/primeng/inputs/togglebutton/togglebuttondemo.component.html',
        'src/main/webapp/app/primeng/inputs/togglebutton/togglebuttondemo.component.ts',
        'src/main/webapp/app/primeng/inputs/togglebutton/togglebuttondemo.module.ts',
        'src/main/webapp/app/primeng/inputs/togglebutton/togglebuttondemo.route.ts',

        'src/main/webapp/app/primeng/fileupload/fileupload/index.ts',
        'src/main/webapp/app/primeng/fileupload/fileupload/fileuploaddemo.component.html',
        'src/main/webapp/app/primeng/fileupload/fileupload/fileuploaddemo.component.ts',
        'src/main/webapp/app/primeng/fileupload/fileupload/fileuploaddemo.module.ts',
        'src/main/webapp/app/primeng/fileupload/fileupload/fileuploaddemo.route.ts',

        'src/main/webapp/app/primeng/dragdrop/dragdrop/index.ts',
        'src/main/webapp/app/primeng/dragdrop/dragdrop/dragdropdemo.component.html',
        'src/main/webapp/app/primeng/dragdrop/dragdrop/dragdropdemo.component.ts',
        'src/main/webapp/app/primeng/dragdrop/dragdrop/dragdropdemo.module.ts',
        'src/main/webapp/app/primeng/dragdrop/dragdrop/dragdropdemo.route.ts',
        'src/main/webapp/app/primeng/dragdrop/dragdrop/service/document.service.ts',
        'src/main/webapp/app/primeng/dragdrop/dragdrop/service/document.ts',

        'src/main/webapp/app/primeng/buttons/button/index.ts',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.component.html',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.component.ts',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.module.ts',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.route.ts',

        'src/main/webapp/app/primeng/buttons/splitbutton/index.ts',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.html',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.ts',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.module.ts',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.route.ts',

        'src/main/webapp/app/primeng/data/carousel/index.ts',
        'src/main/webapp/app/primeng/data/carousel/carouseldemo.component.html',
        'src/main/webapp/app/primeng/data/carousel/carouseldemo.component.ts',
        'src/main/webapp/app/primeng/data/carousel/carouseldemo.module.ts',
        'src/main/webapp/app/primeng/data/carousel/carouseldemo.route.ts',
        'src/main/webapp/app/primeng/data/carousel/service/browser.service.ts',
        'src/main/webapp/app/primeng/data/carousel/service/browser.ts',

        'src/main/webapp/app/primeng/data/datagrid/index.ts',
        'src/main/webapp/app/primeng/data/datagrid/datagriddemo.component.html',
        'src/main/webapp/app/primeng/data/datagrid/datagriddemo.component.ts',
        'src/main/webapp/app/primeng/data/datagrid/datagriddemo.module.ts',
        'src/main/webapp/app/primeng/data/datagrid/datagriddemo.route.ts',
        'src/main/webapp/app/primeng/data/datagrid/service/browser.service.ts',
        'src/main/webapp/app/primeng/data/datagrid/service/browser.ts',

        'src/main/webapp/app/primeng/data/datalist/index.ts',
        'src/main/webapp/app/primeng/data/datalist/datalistdemo.component.html',
        'src/main/webapp/app/primeng/data/datalist/datalistdemo.component.ts',
        'src/main/webapp/app/primeng/data/datalist/datalistdemo.module.ts',
        'src/main/webapp/app/primeng/data/datalist/datalistdemo.route.ts',
        'src/main/webapp/app/primeng/data/datalist/service/browser.service.ts',
        'src/main/webapp/app/primeng/data/datalist/service/browser.ts',

        'src/main/webapp/app/primeng/data/datascroller/index.ts',
        'src/main/webapp/app/primeng/data/datascroller/datascrollerdemo.component.html',
        'src/main/webapp/app/primeng/data/datascroller/datascrollerdemo.component.ts',
        'src/main/webapp/app/primeng/data/datascroller/datascrollerdemo.module.ts',
        'src/main/webapp/app/primeng/data/datascroller/datascrollerdemo.route.ts',
        'src/main/webapp/app/primeng/data/datascroller/service/browser.service.ts',
        'src/main/webapp/app/primeng/data/datascroller/service/browser.ts',

        'src/main/webapp/app/primeng/data/datatable/index.ts',
        'src/main/webapp/app/primeng/data/datatable/datatabledemo.component.html',
        'src/main/webapp/app/primeng/data/datatable/datatabledemo.component.ts',
        'src/main/webapp/app/primeng/data/datatable/datatabledemo.module.ts',
        'src/main/webapp/app/primeng/data/datatable/datatabledemo.route.ts',
        'src/main/webapp/app/primeng/data/datatable/service/browser.service.ts',
        'src/main/webapp/app/primeng/data/datatable/service/browser.ts',
        'src/main/webapp/app/primeng/data/datatable/service/mybrowser.ts',

        'src/main/webapp/app/primeng/data/gmap/index.ts',
        'src/main/webapp/app/primeng/data/gmap/gmapdemo.component.html',
        'src/main/webapp/app/primeng/data/gmap/gmapdemo.component.ts',
        'src/main/webapp/app/primeng/data/gmap/gmapdemo.module.ts',
        'src/main/webapp/app/primeng/data/gmap/gmapdemo.route.ts',

        'src/main/webapp/app/primeng/data/orderlist/index.ts',
        'src/main/webapp/app/primeng/data/orderlist/orderlistdemo.component.html',
        'src/main/webapp/app/primeng/data/orderlist/orderlistdemo.component.ts',
        'src/main/webapp/app/primeng/data/orderlist/orderlistdemo.module.ts',
        'src/main/webapp/app/primeng/data/orderlist/orderlistdemo.route.ts',
        'src/main/webapp/app/primeng/data/orderlist/service/country.service.ts',
        'src/main/webapp/app/primeng/data/orderlist/service/country.ts',

        'src/main/webapp/app/primeng/data/orgchart/index.ts',
        'src/main/webapp/app/primeng/data/orgchart/orgchartdemo.component.html',
        'src/main/webapp/app/primeng/data/orgchart/orgchartdemo.component.ts',
        'src/main/webapp/app/primeng/data/orgchart/orgchartdemo.module.ts',
        'src/main/webapp/app/primeng/data/orgchart/orgchartdemo.route.ts',
        'src/main/webapp/app/primeng/data/orgchart/service/vcard.service.ts',
        'src/main/webapp/app/primeng/data/orgchart/service/vcard.ts',

        'src/main/webapp/app/primeng/data/paginator/index.ts',
        'src/main/webapp/app/primeng/data/paginator/paginatordemo.component.html',
        'src/main/webapp/app/primeng/data/paginator/paginatordemo.component.ts',
        'src/main/webapp/app/primeng/data/paginator/paginatordemo.module.ts',
        'src/main/webapp/app/primeng/data/paginator/paginatordemo.route.ts',

        'src/main/webapp/app/primeng/data/picklist/index.ts',
        'src/main/webapp/app/primeng/data/picklist/picklistdemo.component.html',
        'src/main/webapp/app/primeng/data/picklist/picklistdemo.component.ts',
        'src/main/webapp/app/primeng/data/picklist/picklistdemo.module.ts',
        'src/main/webapp/app/primeng/data/picklist/picklistdemo.route.ts',
        'src/main/webapp/app/primeng/data/picklist/service/country.service.ts',
        'src/main/webapp/app/primeng/data/picklist/service/country.ts',

        'src/main/webapp/app/primeng/data/schedule/index.ts',
        'src/main/webapp/app/primeng/data/schedule/scheduledemo.component.html',
        'src/main/webapp/app/primeng/data/schedule/scheduledemo.component.ts',
        'src/main/webapp/app/primeng/data/schedule/scheduledemo.module.ts',
        'src/main/webapp/app/primeng/data/schedule/scheduledemo.route.ts',
        'src/main/webapp/app/primeng/data/schedule/event/event.ts',
        'src/main/webapp/app/primeng/data/schedule/service/event.service.ts',

        'src/main/webapp/app/primeng/data/tree/index.ts',
        'src/main/webapp/app/primeng/data/tree/treedemo.component.html',
        'src/main/webapp/app/primeng/data/tree/treedemo.component.ts',
        'src/main/webapp/app/primeng/data/tree/treedemo.module.ts',
        'src/main/webapp/app/primeng/data/tree/treedemo.route.ts',
        'src/main/webapp/app/primeng/data/tree/service/treenode.service.ts',

        'src/main/webapp/app/primeng/data/treetable/index.ts',
        'src/main/webapp/app/primeng/data/treetable/treetabledemo.component.html',
        'src/main/webapp/app/primeng/data/treetable/treetabledemo.component.ts',
        'src/main/webapp/app/primeng/data/treetable/treetabledemo.module.ts',
        'src/main/webapp/app/primeng/data/treetable/treetabledemo.route.ts',
        'src/main/webapp/app/primeng/data/treetable/service/treenode.service.ts',

        'src/main/webapp/app/primeng/menu/breadcrumb/index.ts',
        'src/main/webapp/app/primeng/menu/breadcrumb/breadcrumbdemo.component.html',
        'src/main/webapp/app/primeng/menu/breadcrumb/breadcrumbdemo.component.ts',
        'src/main/webapp/app/primeng/menu/breadcrumb/breadcrumbdemo.module.ts',
        'src/main/webapp/app/primeng/menu/breadcrumb/breadcrumbdemo.route.ts',

        'src/main/webapp/app/primeng/menu/contextmenu/index.ts',
        'src/main/webapp/app/primeng/menu/contextmenu/contextmenudemo.component.html',
        'src/main/webapp/app/primeng/menu/contextmenu/contextmenudemo.component.ts',
        'src/main/webapp/app/primeng/menu/contextmenu/contextmenudemo.module.ts',
        'src/main/webapp/app/primeng/menu/contextmenu/contextmenudemo.route.ts',
        'src/main/webapp/app/primeng/menu/contextmenu/service/employee.service.ts',
        'src/main/webapp/app/primeng/menu/contextmenu/service/employee.ts',

        'src/main/webapp/app/primeng/menu/megamenu/index.ts',
        'src/main/webapp/app/primeng/menu/megamenu/megamenudemo.component.html',
        'src/main/webapp/app/primeng/menu/megamenu/megamenudemo.component.ts',
        'src/main/webapp/app/primeng/menu/megamenu/megamenudemo.module.ts',
        'src/main/webapp/app/primeng/menu/megamenu/megamenudemo.route.ts',

        'src/main/webapp/app/primeng/menu/menu/index.ts',
        'src/main/webapp/app/primeng/menu/menu/menudemo.component.html',
        'src/main/webapp/app/primeng/menu/menu/menudemo.component.ts',
        'src/main/webapp/app/primeng/menu/menu/menudemo.module.ts',
        'src/main/webapp/app/primeng/menu/menu/menudemo.route.ts',

        'src/main/webapp/app/primeng/menu/menubar/index.ts',
        'src/main/webapp/app/primeng/menu/menubar/menubardemo.component.html',
        'src/main/webapp/app/primeng/menu/menubar/menubardemo.component.ts',
        'src/main/webapp/app/primeng/menu/menubar/menubardemo.module.ts',
        'src/main/webapp/app/primeng/menu/menubar/menubardemo.route.ts',

        'src/main/webapp/app/primeng/menu/panelmenu/index.ts',
        'src/main/webapp/app/primeng/menu/panelmenu/panelmenudemo.component.html',
        'src/main/webapp/app/primeng/menu/panelmenu/panelmenudemo.component.ts',
        'src/main/webapp/app/primeng/menu/panelmenu/panelmenudemo.module.ts',
        'src/main/webapp/app/primeng/menu/panelmenu/panelmenudemo.route.ts',

        'src/main/webapp/app/primeng/menu/slidemenu/index.ts',
        'src/main/webapp/app/primeng/menu/slidemenu/slidemenudemo.component.html',
        'src/main/webapp/app/primeng/menu/slidemenu/slidemenudemo.component.ts',
        'src/main/webapp/app/primeng/menu/slidemenu/slidemenudemo.module.ts',
        'src/main/webapp/app/primeng/menu/slidemenu/slidemenudemo.route.ts',

        'src/main/webapp/app/primeng/menu/steps/index.ts',
        'src/main/webapp/app/primeng/menu/steps/stepsdemo.component.html',
        'src/main/webapp/app/primeng/menu/steps/stepsdemo.component.ts',
        'src/main/webapp/app/primeng/menu/steps/stepsdemo.module.ts',
        'src/main/webapp/app/primeng/menu/steps/stepsdemo.route.ts',

        'src/main/webapp/app/primeng/menu/tabmenu/index.ts',
        'src/main/webapp/app/primeng/menu/tabmenu/tabmenudemo.component.html',
        'src/main/webapp/app/primeng/menu/tabmenu/tabmenudemo.component.ts',
        'src/main/webapp/app/primeng/menu/tabmenu/tabmenudemo.module.ts',
        'src/main/webapp/app/primeng/menu/tabmenu/tabmenudemo.route.ts',
        'src/main/webapp/app/primeng/menu/tabmenu/pages/downloads.component.html',
        'src/main/webapp/app/primeng/menu/tabmenu/pages/downloads.component.ts',
        'src/main/webapp/app/primeng/menu/tabmenu/pages/overview.component.html',
        'src/main/webapp/app/primeng/menu/tabmenu/pages/overview.component.ts',

        'src/main/webapp/app/primeng/menu/tieredmenu/index.ts',
        'src/main/webapp/app/primeng/menu/tieredmenu/tieredmenudemo.component.html',
        'src/main/webapp/app/primeng/menu/tieredmenu/tieredmenudemo.component.ts',
        'src/main/webapp/app/primeng/menu/tieredmenu/tieredmenudemo.module.ts',
        'src/main/webapp/app/primeng/menu/tieredmenu/tieredmenudemo.route.ts',

        'src/main/webapp/app/primeng/messages/growl/index.ts',
        'src/main/webapp/app/primeng/messages/growl/growldemo.component.html',
        'src/main/webapp/app/primeng/messages/growl/growldemo.component.ts',
        'src/main/webapp/app/primeng/messages/growl/growldemo.module.ts',
        'src/main/webapp/app/primeng/messages/growl/growldemo.route.ts',

        'src/main/webapp/app/primeng/messages/messages/index.ts',
        'src/main/webapp/app/primeng/messages/messages/messagesdemo.component.html',
        'src/main/webapp/app/primeng/messages/messages/messagesdemo.component.ts',
        'src/main/webapp/app/primeng/messages/messages/messagesdemo.module.ts',
        'src/main/webapp/app/primeng/messages/messages/messagesdemo.route.ts',

        'src/main/webapp/app/primeng/misc/blockui/index.ts',
        'src/main/webapp/app/primeng/misc/blockui/blockuidemo.component.html',
        'src/main/webapp/app/primeng/misc/blockui/blockuidemo.component.ts',
        'src/main/webapp/app/primeng/misc/blockui/blockuidemo.module.ts',
        'src/main/webapp/app/primeng/misc/blockui/blockuidemo.route.ts',

        'src/main/webapp/app/primeng/misc/captcha/index.ts',
        'src/main/webapp/app/primeng/misc/captcha/captchademo.component.html',
        'src/main/webapp/app/primeng/misc/captcha/captchademo.component.ts',
        'src/main/webapp/app/primeng/misc/captcha/captchademo.module.ts',
        'src/main/webapp/app/primeng/misc/captcha/captchademo.route.ts',

        'src/main/webapp/app/primeng/misc/defer/index.ts',
        'src/main/webapp/app/primeng/misc/defer/deferdemo.component.html',
        'src/main/webapp/app/primeng/misc/defer/deferdemo.component.ts',
        'src/main/webapp/app/primeng/misc/defer/deferdemo.module.ts',
        'src/main/webapp/app/primeng/misc/defer/deferdemo.route.ts',
        'src/main/webapp/app/primeng/misc/defer/service/browser.service.ts',
        'src/main/webapp/app/primeng/misc/defer/service/browser.ts',
        'src/main/webapp/app/primeng/misc/defer/service/mybrowser.ts',

        'src/main/webapp/app/primeng/misc/inplace/index.ts',
        'src/main/webapp/app/primeng/misc/inplace/inplacedemo.component.html',
        'src/main/webapp/app/primeng/misc/inplace/inplacedemo.component.ts',
        'src/main/webapp/app/primeng/misc/inplace/inplacedemo.module.ts',
        'src/main/webapp/app/primeng/misc/inplace/inplacedemo.route.ts',
        'src/main/webapp/app/primeng/misc/inplace/service/browser.service.ts',
        'src/main/webapp/app/primeng/misc/inplace/service/browser.ts',
        'src/main/webapp/app/primeng/misc/inplace/service/mybrowser.ts',

        'src/main/webapp/app/primeng/misc/progressbar/index.ts',
        'src/main/webapp/app/primeng/misc/progressbar/progressbardemo.component.html',
        'src/main/webapp/app/primeng/misc/progressbar/progressbardemo.component.ts',
        'src/main/webapp/app/primeng/misc/progressbar/progressbardemo.module.ts',
        'src/main/webapp/app/primeng/misc/progressbar/progressbardemo.route.ts',

        'src/main/webapp/app/primeng/misc/rtl/index.ts',
        'src/main/webapp/app/primeng/misc/rtl/rtldemo.component.html',
        'src/main/webapp/app/primeng/misc/rtl/rtldemo.component.ts',
        'src/main/webapp/app/primeng/misc/rtl/rtldemo.module.ts',
        'src/main/webapp/app/primeng/misc/rtl/rtldemo.route.ts',

        'src/main/webapp/app/primeng/misc/terminal/index.ts',
        'src/main/webapp/app/primeng/misc/terminal/terminaldemo.component.html',
        'src/main/webapp/app/primeng/misc/terminal/terminaldemo.component.ts',
        'src/main/webapp/app/primeng/misc/terminal/terminaldemo.module.ts',
        'src/main/webapp/app/primeng/misc/terminal/terminaldemo.route.ts',

        'src/main/webapp/app/primeng/misc/validation/index.ts',
        'src/main/webapp/app/primeng/misc/validation/validationdemo.component.html',
        'src/main/webapp/app/primeng/misc/validation/validationdemo.component.ts',
        'src/main/webapp/app/primeng/misc/validation/validationdemo.module.ts',
        'src/main/webapp/app/primeng/misc/validation/validationdemo.route.ts',

        'src/main/webapp/app/primeng/multimedia/galleria/index.ts',
        'src/main/webapp/app/primeng/multimedia/galleria/galleriademo.component.html',
        'src/main/webapp/app/primeng/multimedia/galleria/galleriademo.component.ts',
        'src/main/webapp/app/primeng/multimedia/galleria/galleriademo.module.ts',
        'src/main/webapp/app/primeng/multimedia/galleria/galleriademo.route.ts',

        'src/main/webapp/app/primeng/overlay/confirmdialog/index.ts',
        'src/main/webapp/app/primeng/overlay/confirmdialog/confirmdialogdemo.component.html',
        'src/main/webapp/app/primeng/overlay/confirmdialog/confirmdialogdemo.component.ts',
        'src/main/webapp/app/primeng/overlay/confirmdialog/confirmdialogdemo.module.ts',
        'src/main/webapp/app/primeng/overlay/confirmdialog/confirmdialogdemo.route.ts',

        'src/main/webapp/app/primeng/overlay/dialog/index.ts',
        'src/main/webapp/app/primeng/overlay/dialog/dialogdemo.component.html',
        'src/main/webapp/app/primeng/overlay/dialog/dialogdemo.component.ts',
        'src/main/webapp/app/primeng/overlay/dialog/dialogdemo.module.ts',
        'src/main/webapp/app/primeng/overlay/dialog/dialogdemo.route.ts',

        'src/main/webapp/app/primeng/overlay/lightbox/index.ts',
        'src/main/webapp/app/primeng/overlay/lightbox/lightboxdemo.component.html',
        'src/main/webapp/app/primeng/overlay/lightbox/lightboxdemo.component.ts',
        'src/main/webapp/app/primeng/overlay/lightbox/lightboxdemo.module.ts',
        'src/main/webapp/app/primeng/overlay/lightbox/lightboxdemo.route.ts',

        'src/main/webapp/app/primeng/overlay/overlaypanel/index.ts',
        'src/main/webapp/app/primeng/overlay/overlaypanel/overlaypaneldemo.component.html',
        'src/main/webapp/app/primeng/overlay/overlaypanel/overlaypaneldemo.component.ts',
        'src/main/webapp/app/primeng/overlay/overlaypanel/overlaypaneldemo.module.ts',
        'src/main/webapp/app/primeng/overlay/overlaypanel/overlaypaneldemo.route.ts',
        'src/main/webapp/app/primeng/overlay/overlaypanel/service/score.service.ts',
        'src/main/webapp/app/primeng/overlay/overlaypanel/service/score.ts',

        'src/main/webapp/app/primeng/overlay/sidebar/index.ts',
        'src/main/webapp/app/primeng/overlay/sidebar/sidebardemo.component.html',
        'src/main/webapp/app/primeng/overlay/sidebar/sidebardemo.component.ts',
        'src/main/webapp/app/primeng/overlay/sidebar/sidebardemo.module.ts',
        'src/main/webapp/app/primeng/overlay/sidebar/sidebardemo.route.ts',

        'src/main/webapp/app/primeng/overlay/tooltip/index.ts',
        'src/main/webapp/app/primeng/overlay/tooltip/tooltipdemo.component.html',
        'src/main/webapp/app/primeng/overlay/tooltip/tooltipdemo.component.ts',
        'src/main/webapp/app/primeng/overlay/tooltip/tooltipdemo.module.ts',
        'src/main/webapp/app/primeng/overlay/tooltip/tooltipdemo.route.ts',

        'src/main/webapp/app/primeng/panel/accordion/index.ts',
        'src/main/webapp/app/primeng/panel/accordion/accordiondemo.component.html',
        'src/main/webapp/app/primeng/panel/accordion/accordiondemo.component.ts',
        'src/main/webapp/app/primeng/panel/accordion/accordiondemo.module.ts',
        'src/main/webapp/app/primeng/panel/accordion/accordiondemo.route.ts',

        'src/main/webapp/app/primeng/panel/fieldset/index.ts',
        'src/main/webapp/app/primeng/panel/fieldset/fieldsetdemo.component.html',
        'src/main/webapp/app/primeng/panel/fieldset/fieldsetdemo.component.ts',
        'src/main/webapp/app/primeng/panel/fieldset/fieldsetdemo.module.ts',
        'src/main/webapp/app/primeng/panel/fieldset/fieldsetdemo.route.ts',

        'src/main/webapp/app/primeng/panel/grid/index.ts',
        'src/main/webapp/app/primeng/panel/grid/griddemo.component.html',
        'src/main/webapp/app/primeng/panel/grid/griddemo.component.ts',
        'src/main/webapp/app/primeng/panel/grid/griddemo.module.ts',
        'src/main/webapp/app/primeng/panel/grid/griddemo.route.ts',
        'src/main/webapp/app/primeng/panel/grid/service/browser.service.ts',
        'src/main/webapp/app/primeng/panel/grid/service/browser.ts',

        'src/main/webapp/app/primeng/panel/panel/index.ts',
        'src/main/webapp/app/primeng/panel/panel/paneldemo.component.html',
        'src/main/webapp/app/primeng/panel/panel/paneldemo.component.ts',
        'src/main/webapp/app/primeng/panel/panel/paneldemo.module.ts',
        'src/main/webapp/app/primeng/panel/panel/paneldemo.route.ts',

        'src/main/webapp/app/primeng/panel/tabview/index.ts',
        'src/main/webapp/app/primeng/panel/tabview/tabviewdemo.component.html',
        'src/main/webapp/app/primeng/panel/tabview/tabviewdemo.component.ts',
        'src/main/webapp/app/primeng/panel/tabview/tabviewdemo.module.ts',
        'src/main/webapp/app/primeng/panel/tabview/tabviewdemo.route.ts',

        'src/main/webapp/app/primeng/panel/toolbar/index.ts',
        'src/main/webapp/app/primeng/panel/toolbar/toolbardemo.component.html',
        'src/main/webapp/app/primeng/panel/toolbar/toolbardemo.component.ts',
        'src/main/webapp/app/primeng/panel/toolbar/toolbardemo.module.ts',
        'src/main/webapp/app/primeng/panel/toolbar/toolbardemo.route.ts',

        'src/main/webapp/app/primeng/charts/barchart/index.ts',
        'src/main/webapp/app/primeng/charts/barchart/barchartdemo.component.html',
        'src/main/webapp/app/primeng/charts/barchart/barchartdemo.component.ts',
        'src/main/webapp/app/primeng/charts/barchart/barchartdemo.module.ts',
        'src/main/webapp/app/primeng/charts/barchart/barchartdemo.route.ts',

        'src/main/webapp/app/primeng/charts/doughnutchart/index.ts',
        'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.component.html',
        'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.component.ts',
        'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.module.ts',
        'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.route.ts',

        'src/main/webapp/app/primeng/charts/linechart/index.ts',
        'src/main/webapp/app/primeng/charts/linechart/linechartdemo.component.html',
        'src/main/webapp/app/primeng/charts/linechart/linechartdemo.component.ts',
        'src/main/webapp/app/primeng/charts/linechart/linechartdemo.module.ts',
        'src/main/webapp/app/primeng/charts/linechart/linechartdemo.route.ts',

        'src/main/webapp/app/primeng/charts/piechart/index.ts',
        'src/main/webapp/app/primeng/charts/piechart/piechartdemo.component.html',
        'src/main/webapp/app/primeng/charts/piechart/piechartdemo.component.ts',
        'src/main/webapp/app/primeng/charts/piechart/piechartdemo.module.ts',
        'src/main/webapp/app/primeng/charts/piechart/piechartdemo.route.ts',

        'src/main/webapp/app/primeng/charts/polarareachart/index.ts',
        'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.component.html',
        'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.component.ts',
        'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.module.ts',
        'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.route.ts',

        'src/main/webapp/app/primeng/charts/radarchart/index.ts',
        'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.component.html',
        'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.component.ts',
        'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.module.ts',
        'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.route.ts',

        /*'src/main/webapp/assets/data/json/browsers/browsers.json',
        'src/main/webapp/assets/data/json/cities/cities.json',
        'src/main/webapp/assets/data/json/countries/countries.json',
        'src/main/webapp/assets/data/json/documents/documents.json',
        'src/main/webapp/assets/data/json/employees/employees.json',
        'src/main/webapp/assets/data/json/events/events.json',
        'src/main/webapp/assets/data/json/places/places.json',
        'src/main/webapp/assets/data/json/scores/scores.json',
        'src/main/webapp/assets/data/json/vcards/vcards.json',
        'src/main/webapp/assets/data/videos/ironman.mp4',
        'src/main/webapp/assets/data/images/avatars/man.png',
        'src/main/webapp/assets/data/images/avatars/women.png',
        'src/main/webapp/assets/data/images/browsers/firefox.png',
        'src/main/webapp/assets/data/images/browsers/ie.png',
        'src/main/webapp/assets/data/images/browsers/safari.png',
        'src/main/webapp/assets/data/images/cars/Golf.png',
        'src/main/webapp/assets/data/images/cars/Jetta.png',
        'src/main/webapp/assets/data/images/cars/Passat.png',
        'src/main/webapp/assets/data/images/cars/Polo.png',
        'src/main/webapp/assets/data/images/cars/Scirocco.png',
        'src/main/webapp/assets/data/images/cars/Touareg.png',
        'src/main/webapp/assets/data/images/cars/Yeni.png',
        'src/main/webapp/assets/data/images/docs/dvi.png',
        'src/main/webapp/assets/data/images/docs/mid.png',
        'src/main/webapp/assets/data/images/docs/mp3.png',
        'src/main/webapp/assets/data/images/docs/perl.png',
        'src/main/webapp/assets/data/images/docs/ppt.png',
        'src/main/webapp/assets/data/images/docs/swf.png',
        'src/main/webapp/assets/data/images/docs/wav.png',
        'src/main/webapp/assets/data/images/docs/xls.png',
        'src/main/webapp/assets/data/images/docs/xml.png',
        'src/main/webapp/assets/data/images/loaders/loader.svg',
        'src/main/webapp/assets/data/images/logos/angular2.png',
        'src/main/webapp/assets/data/images/logos/angular4.png',
        'src/main/webapp/assets/data/images/logos/angularjs.png',
        'src/main/webapp/assets/data/images/logos/primefaces.png',
        'src/main/webapp/assets/data/images/logos/primeng.png',
        'src/main/webapp/assets/data/images/logos/primereact.png',
        'src/main/webapp/assets/data/images/logos/primeui.png',*/

    ],
    translation: [
        'src/main/webapp/i18n/en/primeng.json',
        'src/main/webapp/i18n/fr/primeng.json'
    ],
    protractor: [
        'src/test/javascript/e2e/primeng/primeng.spec.ts'
    ]
};

describe('JHipster generator primeng components', () => {
    describe('With translation', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/default'), dir);
                })
                .withOptions({
                    skipInstall: true
                })
                .withPrompts({
                    confirmation: true
                })
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.file(expectedFiles.primeng);
            assert.file(expectedFiles.translation);
            assert.noFile(expectedFiles.protractor);
        });
    });

    describe('Without translation', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/notranslation'), dir);
                })
                .withOptions({
                    skipInstall: true
                })
                .withPrompts({
                    confirmation: true
                })
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.file(expectedFiles.primeng);
            assert.noFile(expectedFiles.translation);
            assert.noFile(expectedFiles.protractor);
        });
    });

    describe('With protractor', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/protractor'), dir);
                })
                .withOptions({
                    skipInstall: true
                })
                .withPrompts({
                    confirmation: true
                })
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.file(expectedFiles.primeng);
            assert.file(expectedFiles.translation);
            assert.file(expectedFiles.protractor);
        });
    });

    describe('With protractor and no translation', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/protractor-notranslation'), dir);
                })
                .withOptions({
                    skipInstall: true
                })
                .withPrompts({
                    confirmation: true
                })
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.file(expectedFiles.primeng);
            assert.noFile(expectedFiles.translation);
            assert.file(expectedFiles.protractor);
        });
    });

    describe('With existing lib in package.json', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/update'), dir);
                })
                .withOptions({
                    skipInstall: true
                })
                .withPrompts({
                    confirmation: true
                })
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.file(expectedFiles.primeng);
            assert.file(expectedFiles.translation);
            assert.noFile(expectedFiles.protractor);
        });
    });

    describe('No confirmation', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/default'), dir);
                })
                .withOptions({
                    skipInstall: true
                })
                .withPrompts({
                    confirmation: false
                })
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.noFile(expectedFiles.primeng);
            assert.noFile(expectedFiles.translation);
            assert.noFile(expectedFiles.protractor);
        });
    });
});
