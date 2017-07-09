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
    const dashboardMenu = element(by.id('dashboard-menu'));
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
        dashboardMenu.click();
    });

    it('should load BarChart', () => {
        element(by.css('[routerLink="barchart"]')).click();
        <%_ if (enableTranslation) { _%>
        const expect1 = /dashboard.charts.barchart.title/;
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
        const expect1 = /dashboard.charts.doughnutchart.title/;
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
        const expect1 = /dashboard.charts.linechart.title/;
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
        const expect1 = /dashboard.charts.piechart.title/;
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
        const expect1 = /dashboard.charts.polarareachart.title/;
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
        const expect1 = /dashboard.charts.radarchart.title/;
        <%_ } else { _%>
        const expect1 = /RadarChart/;
        <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load Button', () => {
        element(by.css('[routerLink="button"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /dashboard.button.button.title/;
            <%_ } else { _%>
            const expect1 = /button/;
            <%_ } _%>
        element.all(by.css('h2 span')).first().<%- elementGetter %>.then((value) => {
            expect(value).toMatch(expect1);
        });
    });

    it('should load SplitButton', () => {
        element(by.css('[routerLink="splitbutton"]')).click();
        <%_ if (enableTranslation) { _%>
            const expect1 = /dashboard.button.splitbutton.title/;
            <%_ } else { _%>
            const expect1 = /splitbutton/;
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
