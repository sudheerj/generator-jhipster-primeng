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
