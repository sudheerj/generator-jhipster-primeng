import { browser, element, by } from 'protractor';
<%_
let elementGetter = `getText()`;
if (enableTranslation) {
    elementGetter = `getAttribute('jhiTranslate')`;
}
_%>

describe('administration', () => {

    const username = element(by.id('username'));
    const password = element(by.id('password'));
    const accountMenu = element(by.id('account-menu'));
    const primengMenu = element(by.id('primeng-menu'));
    const login = element(by.id('login'));
    const logout = element(by.id('logout'));

    beforeAll(() => {
        browser.get('/');

        accountMenu.click();
        login.click();

        username.sendKeys('admin');
        password.sendKeys('admin');
        element(by.css('button[type=submit]')).click();
        browser.waitForAngular();
    });

    beforeEach(() => {
        primengMenu.click();
    });

    it('should load BarChart', () => {
        element(by.css('[routerLink="barchart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.barchart.home.title/;
            <%_ } else { _%>
            const expect1 = /BarChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load DoughnutChart', () => {
        element(by.css('[routerLink="doughnutchart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.doughnutchart.home.title/;
            <%_ } else { _%>
            const expect1 = /DoughnutChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load LineChart', () => {
        element(by.css('[routerLink="linechart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.linechart.home.title/;
            <%_ } else { _%>
            const expect1 = /LineChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load PieChart', () => {
        element(by.css('[routerLink="piechart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.piechart.home.title/;
            <%_ } else { _%>
            const expect1 = /PieChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load PolarAreaChart', () => {
        element(by.css('[routerLink="polarareachart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.polarareachart.home.title/;
            <%_ } else { _%>
            const expect1 = /PolarAreaChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load RadarChart', () => {
        element(by.css('[routerLink="radarchart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.radarchart.home.title/;
            <%_ } else { _%>
            const expect1 = /RadarChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load InputText', () => {
        element(by.css('[routerLink="inputtext"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.inputtext.title/;
            <%_ } else { _%>
            const expect1 = /InputText/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load InputGroup', () => {
        element(by.css('[routerLink="inputgroup"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.inputgroup.title/;
            <%_ } else { _%>
            const expect1 = /InputGroup/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load InputTextArea', () => {
        element(by.css('[routerLink="inputtextarea"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.inputtextarea.title/;
            <%_ } else { _%>
            const expect1 = /InputTextArea/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Calendar', () => {
        element(by.css('[routerLink="calendar"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.calendar.title/;
            <%_ } else { _%>
            const expect1 = /Calendar/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Chips', () => {
        element(by.css('[routerLink="chips"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.chips.title/;
            <%_ } else { _%>
            const expect1 = /Chips/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load InputSwitch', () => {
        element(by.css('[routerLink="inputswitch"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.inputswitch.title/;
            <%_ } else { _%>
            const expect1 = /InputSwitch/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load InputMask', () => {
        element(by.css('[routerLink="inputmask"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.inputmask.title/;
            <%_ } else { _%>
            const expect1 = /InputMask/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load PasswordIndicator', () => {
        element(by.css('[routerLink="password"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.password.title/;
            <%_ } else { _%>
            const expect1 = /Password/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Rating', () => {
        element(by.css('[routerLink="rating"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.rating.title/;
            <%_ } else { _%>
            const expect1 = /Rating/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Spinner', () => {
        element(by.css('[routerLink="spinner"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.spinner.title/;
            <%_ } else { _%>
            const expect1 = /Spinner/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load ToggleButton', () => {
        element(by.css('[routerLink="togglebutton"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.togglebutton.title/;
            <%_ } else { _%>
            const expect1 = /ToggleButton/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load AutoComplete', () => {
        element(by.css('[routerLink="autocomplete"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.autocomplete.title/;
            <%_ } else { _%>
            const expect1 = /AutoComplete/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Checkbox', () => {
        element(by.css('[routerLink="checkbox"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.checkbox.title/;
            <%_ } else { _%>
            const expect1 = /Checkbox/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load ColorPicker', () => {
        element(by.css('[routerLink="ColorPicker"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.colorpicker.title/;
            <%_ } else { _%>
            const expect1 = /ColorPicker/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Editor', () => {
        element(by.css('[routerLink="editor"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.editor.title/;
            <%_ } else { _%>
            const expect1 = /Editor/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Listbox', () => {
        element(by.css('[routerLink="listbox"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.listbox.title/;
            <%_ } else { _%>
            const expect1 = /Listbox/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Select', () => {
        element(by.css('[routerLink="select"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.select.title/;
            <%_ } else { _%>
            const expect1 = /Select/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load RadioButton', () => {
        element(by.css('[routerLink="select"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.select.title/;
            <%_ } else { _%>
            const expect1 = /Select/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Slider', () => {
        element(by.css('[routerLink="slider"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.slider.title/;
            <%_ } else { _%>
            const expect1 = /Slider/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load SelectButton', () => {
        element(by.css('[routerLink="selectbutton"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.inputs.selectbutton.title/;
            <%_ } else { _%>
            const expect1 = /SelectButton/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load DataTable', () => {
        element(by.css('[routerLink="datatable"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.datatable.title/;
            <%_ } else { _%>
            const expect1 = /DataTable/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load DataGrid', () => {
        element(by.css('[routerLink="datagrid"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.datagrid.title/;
            <%_ } else { _%>
            const expect1 = /DataGrid/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Carousel', () => {
        element(by.css('[routerLink="carousel"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.carousel.title/;
            <%_ } else { _%>
            const expect1 = /Carousel/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load OrderList', () => {
        element(by.css('[routerLink="orderlist"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.orderlist.title/;
            <%_ } else { _%>
            const expect1 = /OrderList/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load DataList', () => {
        element(by.css('[routerLink="datalist"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.datalist.title/;
            <%_ } else { _%>
            const expect1 = /DataList/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Paginator', () => {
        element(by.css('[routerLink="paginator"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.paginator.title/;
            <%_ } else { _%>
            const expect1 = /Paginator/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Schedule', () => {
        element(by.css('[routerLink="schedule"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.schedule.title/;
            <%_ } else { _%>
            const expect1 = /Schedule/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load TreeTable', () => {
        element(by.css('[routerLink="treetable"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.treetable.title/;
            <%_ } else { _%>
            const expect1 = /TreeTable/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load DataScroller', () => {
        element(by.css('[routerLink="datascroller"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.datascroller.title/;
            <%_ } else { _%>
            const expect1 = /DataScroller/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load OrgChart', () => {
        element(by.css('[routerLink="orgchart"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.orgchart.title/;
            <%_ } else { _%>
            const expect1 = /OrgChart/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Gmap', () => {
        element(by.css('[routerLink="gmap"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.gmap.title/;
            <%_ } else { _%>
            const expect1 = /Gmap/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load PickList', () => {
        element(by.css('[routerLink="picklist"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.picklist.title/;
            <%_ } else { _%>
            const expect1 = /PickList/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Tree', () => {
        element(by.css('[routerLink="tree"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.data.tree.title/;
            <%_ } else { _%>
            const expect1 = /Tree/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Accordion', () => {
        element(by.css('[routerLink="accordion"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.panel.accordion.title/;
            <%_ } else { _%>
            const expect1 = /Accordion/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Panel', () => {
        element(by.css('[routerLink="panel"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.panel.panel.title/;
            <%_ } else { _%>
            const expect1 = /Panel/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load TabView', () => {
        element(by.css('[routerLink="tabview"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.panel.tabview.title/;
            <%_ } else { _%>
            const expect1 = /TabView/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Fieldset', () => {
        element(by.css('[routerLink="fieldset"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.panel.fieldset.title/;
            <%_ } else { _%>
            const expect1 = /Fieldset/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Grid', () => {
        element(by.css('[routerLink="grid"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.panel.grid.title/;
            <%_ } else { _%>
            const expect1 = /Grid/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Toolbar', () => {
        element(by.css('[routerLink="toolbar"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.panel.toolbar.title/;
            <%_ } else { _%>
            const expect1 = /Toolbar/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load sidebar', () => {
        element(by.css('[routerLink="sidebar"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.overlay.sidebar.title/;
            <%_ } else { _%>
            const expect1 = /SideBar/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Dialog', () => {
        element(by.css('[routerLink="dialog"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.overlay.dialog.title/;
            <%_ } else { _%>
            const expect1 = /Dialog/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load ConfirmDialog', () => {
        element(by.css('[routerLink="confirmdialog"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.overlay.confirmdialog.title/;
            <%_ } else { _%>
            const expect1 = /ConfirmDialog/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load LightBox', () => {
        element(by.css('[routerLink="lightbox"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.overlay.lightbox.title/;
            <%_ } else { _%>
            const expect1 = /LightBox/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load OverlayPanel', () => {
        element(by.css('[routerLink="overlaypanel"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.overlay.overlaypanel.title/;
            <%_ } else { _%>
            const expect1 = /OverlayPanel/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Tooltip', () => {
        element(by.css('[routerLink="tooltip"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.overlay.tooltip.title/;
            <%_ } else { _%>
            const expect1 = /Tooltip/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load FileUpload', () => {
        element(by.css('[routerLink="fileupload"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.fileupload.fileupload.title/;
            <%_ } else { _%>
            const expect1 = /FileUpload/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Menu', () => {
        element(by.css('[routerLink="menu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.menu.title/;
            <%_ } else { _%>
            const expect1 = /Menu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load ContextMenu', () => {
        element(by.css('[routerLink="contextmenu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.contextmenu.title/;
            <%_ } else { _%>
            const expect1 = /ContextMenu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load PanelMenu', () => {
        element(by.css('[routerLink="panelmenu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.panelmenu.title/;
            <%_ } else { _%>
            const expect1 = /PanelMenu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Steps', () => {
        element(by.css('[routerLink="steps"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.steps.title/;
            <%_ } else { _%>
            const expect1 = /Steps/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load TieredMenu', () => {
        element(by.css('[routerLink="tieredmenu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.tieredmenu.title/;
            <%_ } else { _%>
            const expect1 = /TieredMenu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Breadcrumb', () => {
        element(by.css('[routerLink="breadcrumb"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.breadcrumb.title/;
            <%_ } else { _%>
            const expect1 = /Breadcrumb/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load MegaMenu', () => {
        element(by.css('[routerLink="megamenu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.megamenu.title/;
            <%_ } else { _%>
            const expect1 = /MegaMenu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Menubar', () => {
        element(by.css('[routerLink="menubar"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.menubar.title/;
            <%_ } else { _%>
            const expect1 = /Menubar/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load SlideMenu', () => {
        element(by.css('[routerLink="slidemenu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.slidemenu.title/;
            <%_ } else { _%>
            const expect1 = /SlideMenu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load TabMenu', () => {
        element(by.css('[routerLink="tabmenu"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.menu.tabmenu.title/;
            <%_ } else { _%>
            const expect1 = /TabMenu/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Messages', () => {
        element(by.css('[routerLink="messages"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.messages.messages.title/;
            <%_ } else { _%>
            const expect1 = /Messages/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Growl', () => {
        element(by.css('[routerLink="growl"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.messages.growl.title/;
            <%_ } else { _%>
            const expect1 = /Growl/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Galleria', () => {
        element(by.css('[routerLink="galleria"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.multimedia.galleria.title/;
            <%_ } else { _%>
            const expect1 = /Galleria/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load DragDrop', () => {
        element(by.css('[routerLink="dragdrop"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.dragdrop.dragdrop.title/;
            <%_ } else { _%>
            const expect1 = /DragDrop/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Captcha', () => {
        element(by.css('[routerLink="captcha"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.multimedia.captcha.title/;
            <%_ } else { _%>
            const expect1 = /Captcha/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Defer', () => {
        element(by.css('[routerLink="defer"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.defer.title/;
            <%_ } else { _%>
            const expect1 = /Defer/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load RTL', () => {
        element(by.css('[routerLink="rtl"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.rtl.title/;
            <%_ } else { _%>
            const expect1 = /RTL/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load BlockUI', () => {
        element(by.css('[routerLink="blockui"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.blockui.title/;
            <%_ } else { _%>
            const expect1 = /BlockUI/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Terminal', () => {
        element(by.css('[routerLink="terminal"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.terminal.title/;
            <%_ } else { _%>
            const expect1 = /Terminal/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Inplace', () => {
        element(by.css('[routerLink="inplace"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.inplace.title/;
            <%_ } else { _%>
            const expect1 = /Inplace/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load ProgressBar', () => {
        element(by.css('[routerLink="progressbar"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.progressbar.title/;
            <%_ } else { _%>
            const expect1 = /ProgressBar/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Validation', () => {
        element(by.css('[routerLink="validation"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.validation.title/;
            <%_ } else { _%>
            const expect1 = /Validation/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Progress Spinner', () => {
        element(by.css('[routerLink="progressspinner"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.misc.progressspinner.title/;
            <%_ } else { _%>
            const expect1 = /ProgressSpinner/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Button', () => {
        element(by.css('[routerLink="button"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.buttons.button.title/;
            <%_ } else { _%>
            const expect1 = /Button/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load SplitButton', () => {
        element(by.css('[routerLink="splitbutton"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /primeng.buttons.splitbutton.title/;
            <%_ } else { _%>
            const expect1 = /SplitButton/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    afterAll(() => {
        accountMenu.click();
        logout.click();
    });
});
