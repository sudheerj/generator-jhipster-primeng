const inquirer = require('inquirer');

export const ANGULAR_VERSION = '7.0.0';
export const PRIMENG_VERSION = '7.0.0';
export const PRIMEICONS_VERSION = '1.0.0';
export const PRIMEFLEX_VERSION = '1.0.0-rc.1';
export const PRIMENG_EXTENSIONS_VERSION = '0.0.45';
export const CHARTJS_VERSION = '2.7.1';
export const MOMENT_VERSION = '2.20.1';
export const FULLCALENDAR_VERSION = '4.0.0-alpha.2';
export const QUILL_VERSION = '1.3.6';

export const THEME_OPTIONS = [
    {
        value: 'nova-colored',
        name: 'Nova Colored'
    },
    {
        value: 'nova-dark',
        name: 'Nova Dark'
    },
    {
        value: 'nova-light',
        name: 'Nova Light'
    },
    {
        value: 'luna-amber',
        name: 'Luna Amber'
    },
    {
        value: 'luna-blue',
        name: 'Luna Blue'
    },
    {
        value: 'luna-green',
        name: 'Luna Green'
    },
    {
        value: 'luna-pink',
        name: 'Luna Pink'
    }
];


export const COMPONENT_GROUP_CHOICE_LIST = [{
    name: 'inputs',
    value: 'inputs',
    checked: true
}, {
    name: 'buttons',
    value: 'buttons',
    checked: false
}, {
    name: 'data',
    value: 'data',
    checked: false
}, {
    name: 'panel',
    value: 'panel',
    checked: false
}, {
    name: 'overlay',
    value: 'overlay',
    checked: false
}, {
    name: 'fileupload',
    value: 'fileupload',
    checked: false
}, {
    name: 'menu',
    value: 'menu',
    checked: false
}, {
    name: 'charts',
    value: 'charts',
    checked: false
}, {
    name: 'messages',
    value: 'messages',
    checked: false
}, {
    name: 'multimedia',
    value: 'multimedia',
    checked: false
}, {
    name: 'dragdrop',
    value: 'dragdrop',
    checked: false
}, {
    name: 'misc',
    value: 'misc',
    checked: false
}
];

export const COMPONENT_CHOICE_LIST = [new inquirer.Separator(' == Input Components == '),
    {
        name: 'AutoComplete',
        value: 'autocomplete',
        checked: true
    }, {
        name: 'Calendar',
        value: 'calendar',
        checked: false
    }, {
        name: 'Checkbox',
        value: 'checkbox',
        checked: false
    }, {
        name: 'Chips',
        value: 'chips',
        checked: false
    }, {
        name: 'ColorPicker',
        value: 'colorpicker',
        checked: false
    }, {
        name: 'Editor',
        value: 'editor',
        checked: false
    }, {
        name: 'InputGroup',
        value: 'inputgroup',
        checked: false
    }, {
        name: 'InputMask',
        value: 'inputmask',
        checked: false
    }, {
        name: 'InputSwitch',
        value: 'inputswitch',
        checked: false
    }, {
        name: 'InputText',
        value: 'inputtext',
        checked: false
    }, {
        name: 'InputTextarea',
        value: 'inputtextarea',
        checked: false
    }, {
        name: 'ListBox',
        value: 'listbox',
        checked: false
    }, {
        name: 'PasswordIndicator',
        value: 'passwordindicator',
        checked: false
    }, {
        name: 'RadioButton',
        value: 'radiobutton',
        checked: false
    }, {
        name: 'Rating',
        value: 'rating',
        checked: false
    }, {
        name: 'Select',
        value: 'select',
        checked: false
    }, {
        name: 'SelectButton',
        value: 'selectbutton',
        checked: false
    }, {
        name: 'Slider',
        value: 'slider',
        checked: false
    }, {
        name: 'Spinner',
        value: 'spinner',
        checked: false
    }, {
        name: 'ToggleButton',
        value: 'togglebutton',
        checked: false
    }, new inquirer.Separator(' == Button Components == '), {
        name: 'Button',
        value: 'button',
        checked: false
    }, {
        name: 'SplitButton',
        value: 'splitbutton',
        checked: false
    }, new inquirer.Separator(' == Data Components == '), {
        name: 'Carousel',
        value: 'carousel',
        checked: false
    }, {
        name: 'DataScroller',
        value: 'datascroller',
        checked: false
    }, {
        name: 'Table',
        value: 'table',
        checked: false
    }, {
        name: 'GMap',
        value: 'gmap',
        checked: false
    }, {
        name: 'OrderList',
        value: 'orderlist',
        checked: false
    }, {
        name: 'OrgChart',
        value: 'orgchart',
        checked: false
    }, {
        name: 'Paginator',
        value: 'paginator',
        checked: false
    }, {
        name: 'PickList',
        value: 'picklist',
        checked: false
    }, {
        name: 'Schedule',
        value: 'schedule',
        checked: false
    }, {
        name: 'Tree',
        value: 'tree',
        checked: false
    }, {
        name: 'TreeTable',
        value: 'treetable',
        checked: false
    }, {
        name: 'DataView',
        value: 'dataview',
        checked: false
    }, new inquirer.Separator(' == Panel Components == '), {
        name: 'Accordion',
        value: 'accordion',
        checked: false
    }, {
        name: 'Fieldset',
        value: 'fieldset',
        checked: false
    }, {
        name: 'Grid',
        value: 'grid',
        checked: false
    }, {
        name: 'Panel',
        value: 'panel',
        checked: false
    }, {
        name: 'TabView',
        value: 'tabview',
        checked: false
    }, {
        name: 'Toolbar',
        value: 'toolbar',
        checked: false
    }, {
        name: 'ScrollPanel',
        value: 'scrollpanel',
        checked: false
    }, {
        name: 'Card',
        value: 'card',
        checked: false
    }, new inquirer.Separator(' == Overlay Components == '), {
        name: 'ConfirmDialog',
        value: 'confirmdialog',
        checked: false
    }, {
        name: 'Dialog',
        value: 'dialog',
        checked: false
    }, {
        name: 'Lightbox',
        value: 'lightbox',
        checked: false
    }, {
        name: 'OverlayPanel',
        value: 'overlaypanel',
        checked: false
    }, {
        name: 'SideBar',
        value: 'sidebar',
        checked: false
    }, {
        name: 'Tooltip',
        value: 'tooltip',
        checked: false
    }, new inquirer.Separator(' == FileUpload Components == '), {
        name: 'Fileupload',
        value: 'fileupload',
        checked: false
    }, new inquirer.Separator(' == Menu Components == '), {
        name: 'Breadcrumb',
        value: 'breadcrumb',
        checked: false
    }, {
        name: 'ContextMenu',
        value: 'contextmenu',
        checked: false
    }, {
        name: 'MegaMenu',
        value: 'megamenu',
        checked: false
    }, {
        name: 'Menu',
        value: 'menu',
        checked: false
    }, {
        name: 'MenuBar',
        value: 'menubar',
        checked: false
    }, {
        name: 'PanelMenu',
        value: 'panelmenu',
        checked: false
    }, {
        name: 'SlideMenu',
        value: 'slidemenu',
        checked: false
    }, {
        name: 'Steps',
        value: 'steps',
        checked: false
    }, {
        name: 'TabMenu',
        value: 'TabMenu',
        checked: false
    }, {
        name: 'TieredMenu',
        value: 'tieredmenu',
        checked: false
    }, new inquirer.Separator(' == Chart Components == '), {
        name: 'BarChart',
        value: 'barchart',
        checked: false
    }, {
        name: 'DoughnutChart',
        value: 'doughnutchart',
        checked: false
    }, {
        name: 'LineChart',
        value: 'linechart',
        checked: false
    }, {
        name: 'PieChart',
        value: 'piechart',
        checked: false
    }, {
        name: 'PolarAreaChart',
        value: 'polarareachart',
        checked: false
    }, {
        name: 'RadarChart',
        value: 'radarchart',
        checked: false
    }, new inquirer.Separator(' == Message Components == '), {
        name: 'Growl',
        value: 'growl',
        checked: false
    }, {
        name: 'Messages',
        value: 'messages',
        checked: false
    }, {
        name: 'Toast',
        value: 'toast',
        checked: false
    }, new inquirer.Separator(' == Multimedia Components == '), {
        name: 'Galleria',
        value: 'galleria',
        checked: false
    }, new inquirer.Separator(' == Drag&Drop Components == '), {
        name: 'DragDrop',
        value: 'dragdrop',
        checked: false
    }, new inquirer.Separator(' == Miscellaneous Components == '), {
        name: 'BlockUI',
        value: 'blockui',
        checked: false
    }, {
        name: 'Captcha',
        value: 'captcha',
        checked: false
    }, {
        name: 'Defer',
        value: 'defer',
        checked: false
    }, {
        name: 'Inplace',
        value: 'inplace',
        checked: false
    }, {
        name: 'ProgressBar',
        value: 'progressbar',
        checked: false
    }, {
        name: 'RTL',
        value: 'rtl',
        checked: false
    }, {
        name: 'Terminal',
        value: 'terminal',
        checked: false
    }, {
        name: 'Validation',
        value: 'validation',
        checked: false
    }, {
        name: 'ProgressSpinner',
        value: 'progressspinner',
        checked: false
    }
];

export const codes = ['ad.png',
    'ae.png',
    'af.png',
    'ag.png',
    'al.png',
    'am.png',
    'ao.png',
    'ar.png',
    'at.png',
    'au.png',
    'az.png',
    'ba.png',
    'bb.png',
    'bd.png',
    'be.png',
    'bf.png',
    'bg.png',
    'bh.png',
    'bi.png',
    'bj.png',
    'bn.png',
    'bo.png',
    'br.png',
    'bs.png',
    'bt.png',
    'bw.png',
    'by.png',
    'bz.png',
    'ca.png',
    'cd.png',
    'cf.png',
    'cg.png',
    'ch.png',
    'ci.png',
    'cl.png',
    'cm.png',
    'cn.png',
    'co.png',
    'cr.png',
    'cu.png',
    'cv.png',
    'cy.png',
    'cz.png',
    'de.png',
    'dj.png',
    'dk.png',
    'dm.png',
    'do.png',
    'dz.png',
    'ec.png',
    'ee.png',
    'eg.png',
    'eh.png',
    'er.png',
    'es.png',
    'et.png',
    'fi.png',
    'fj.png',
    'fm.png',
    'fr.png',
    'ga.png',
    'gb.png',
    'gd.png',
    'ge.png',
    'gh.png',
    'gm.png',
    'gn.png',
    'gq.png',
    'gr.png',
    'gt.png',
    'gw.png',
    'gy.png',
    'hn.png',
    'hr.png',
    'ht.png',
    'hu.png',
    'id.png',
    'ie.png',
    'il.png',
    'in.png',
    'iq.png',
    'ir.png',
    'is.png',
    'it.png',
    'jm.png',
    'jo.png',
    'jp.png',
    'ke.png',
    'kg.png',
    'kh.png',
    'ki.png',
    'km.png',
    'kn.png',
    'kp.png',
    'kr.png',
    'ks.png',
    'kw.png',
    'kz.png',
    'la.png',
    'lb.png',
    'lc.png',
    'li.png',
    'lk.png',
    'lr.png',
    'ls.png',
    'lt.png',
    'lu.png',
    'lv.png',
    'ly.png',
    'ma.png',
    'mc.png',
    'md.png',
    'me.png',
    'mg.png',
    'mh.png',
    'mk.png',
    'ml.png',
    'mm.png',
    'mn.png',
    'mr.png',
    'mt.png',
    'mu.png',
    'mv.png',
    'mw.png',
    'mx.png',
    'my.png',
    'mz.png',
    'na.png',
    'ne.png',
    'ng.png',
    'ni.png',
    'nl.png',
    'no.png',
    'np.png',
    'nr.png',
    'nz.png',
    'om.png',
    'pa.png',
    'pe.png',
    'pg.png',
    'ph.png',
    'pk.png',
    'pl.png',
    'pt.png',
    'pw.png',
    'py.png',
    'qa.png',
    'ro.png',
    'rs.png',
    'ru.png',
    'rw.png',
    'sa.png',
    'sb.png',
    'sc.png',
    'sd.png',
    'se.png',
    'sg.png',
    'si.png',
    'sk.png',
    'sl.png',
    'sm.png',
    'sn.png',
    'so.png',
    'sr.png',
    'st.png',
    'sv.png',
    'sy.png',
    'sz.png',
    'td.png',
    'tg.png',
    'th.png',
    'tj.png',
    'tl.png',
    'tm.png',
    'tn.png',
    'to.png',
    'tr.png',
    'tt.png',
    'tv.png',
    'tw.png',
    'tz.png',
    'ua.png',
    'ug.png',
    'us.png',
    'uy.png',
    'uz.png',
    'va.png',
    'vc.png',
    've.png',
    'vn.png',
    'vu.png',
    'ws.png',
    'ye.png',
    'za.png',
    'zm.png',
    'zw.png'];

export const components = {
    inputgroup: 'inputs',
    inputtext: 'inputs',
    inputtextarea: 'inputs',
    calendar: 'inputs',
    chips: 'inputs',
    inputswitch: 'inputs',
    inputmask: 'inputs',
    passwordindicator: 'inputs',
    rating: 'inputs',
    spinner: 'inputs',
    togglebutton: 'inputs',
    autocomplete: 'inputs',
    checkbox: 'inputs',
    colorpicker: 'inputs',
    editor: 'inputs',
    listbox: 'inputs',
    select: 'inputs',
    radiobutton: 'inputs',
    slider: 'inputs',
    selectbutton: 'inputs',
    keyfilter: 'inputs',
    button: 'buttons',
    splitbutton: 'buttons',
    table: 'data',
    carousel: 'data',
    orderlist: 'data',
    dataview: 'data',
    paginator: 'data',
    schedule: 'data',
    treetable: 'data',
    datascroller: 'data',
    orgchart: 'data',
    gmap: 'data',
    picklist: 'data',
    tree: 'data',
    accordion: 'panel',
    panel: 'panel',
    tabview: 'panel',
    fieldset: 'panel',
    grid: 'panel',
    toolbar: 'panel',
    scrollpanel: 'panel',
    card: 'panel',
    sidebar: 'overlay',
    dialog: 'overlay',
    confirmdialog: 'overlay',
    lightbox: 'overlay',
    overlaypanel: 'overlay',
    tooltip: 'overlay',
    fileupload: 'fileupload',
    menu: 'menu',
    contextmenu: 'menu',
    panelmenu: 'menu',
    steps: 'menu',
    tieredmenu: 'menu',
    breadcrumb: 'menu',
    megamenu: 'menu',
    menubar: 'menu',
    slidemenu: 'menu',
    tabmenu: 'menu',
    barchart: 'charts',
    doughnutchart: 'charts',
    linechart: 'charts',
    piechart: 'charts',
    polarareachart: 'charts',
    radarchart: 'charts',
    messages: 'messages',
    growl: 'messages',
    toast: 'messages',
    galleria: 'multimedia',
    dragdrop: 'dragdrop',
    captcha: 'misc',
    defer: 'misc',
    rtl: 'misc',
    blockui: 'misc',
    terminal: 'misc',
    inplace: 'misc',
    progressbar: 'misc',
    validation: 'misc',
    progressspinner: 'misc'
};

export const primengTranslation = `"primeng": {
                "main": "primeng",
                "barchart": "BarChart",
                "doughnutchart": "DoughnutChart",
                "linechart": "LineChart",
                "piechart": "PieChart",
                "polarareachart": "PolarAreaChart",
                "radarchart": "RadarChart",
                "button": "Button",
                "splitbutton": "SplitButton",
                "inputgroup":"InputGroup",
                "inputtext":"InputText",
                "inputtextarea":"InputTextArea",
                "calendar": "Calendar",
                "chips": "Chips",
                "inputswitch":"InputSwitch",
                "inputmask":  "InputMask",
                "passwordindicator":  "Password Indicator",
                "rating":  "Rating",
                "spinner": "Spinner",
                "togglebutton": "ToggleButton",
                "autocomplete": "AutoComplete",
                "checkbox":  "Checkbox&TriCheckbox",
                "colorpicker":"ColorPicker",
                "editor":  "Editor",
                "listbox": "Listbox",
                "select":  "MultiSelect&Dropdown",
                "radiobutton": "RadioButton",
                "slider":  "Slider",
                "selectbutton": "SelectButton",
                "galleria":"Galleria",
                "messages":"Messages",
                "growl":"Growl",
                "toast":"Toast",
                "dialog":"Dialog",
                "confirmdialog":"ConfirmDialog",
                "lightbox": "Lightbox",
                "overlaypanel":"OverlayPanel",
                "sidebar": "SideBar",
                "tooltip": "Tooltip",
                "table": "Table",
                "carousel": "Carousel",
                "orderlist": "OrderList",
                "dataview": "DataView",
                "paginator": "Paginator",
                "schedule": "Schedule",
                "treetable": "TreeTable",
                "datascroller": "DataScroller",
                "orgchart": "OrgChart",
                "gmap":  "Gmap",
                "picklist":  "PickList",
                "tree":  "Tree",
                "dragdrop":"DragDrop",
                "menu":  "Menu",
                "contextmenu":  "ContextMenu",
                "panelmenu":"PanelMenu",
                "steps":  "Steps",
                "tieredmenu":"TieredMenu",
                "breadcrumb": "Breadcrumb",
                "megamenu": "MegaMenu",
                "menubar":  "Menubar",
                "slidemenu": "SlideMenu",
                "tabmenu":  "TabMenu",
                "fileupload":"FileUpload",
                "accordion":"Accordion",
                "panel":  "Panel",
                "tabview":  "TabView",
                "fieldset":  "Fieldset",
                "grid":  "Grid",
                "toolbar": "Toolbar",
                "validation":"validation",
                "captcha": "Captcha",
                "defer":  "Defer",
                "rtl":  "RTL",
                "blockui":  "BlockUI",
                "terminal": "Terminal",
                "inplace":  "Inplace",
                "progressbar": "ProgressBar",
                "progressspinner": "ProgressSpinner",
                "scrollpanel": "ScrollPanel",
                "card": "Card",
                "keyfilter": "KeyFilter"
            },`;

