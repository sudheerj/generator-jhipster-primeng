const util = require('util');
const chalk = require('chalk');
const generator = require('yeoman-generator');
const packagejs = require('../../package.json');
const semver = require('semver');
const shelljs = require('shelljs');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

const JhipsterGenerator = generator.extend({});
util.inherits(JhipsterGenerator, BaseGenerator);

const ANGULAR_VERSION = '4.2.6';
const PRIMENG_VERSION = '4.2.1';
const PRIMENG_EXT_WIZARD_VERSION = '2.1.0';
const CHARTJS_VERSION = '2.6.0';

module.exports = JhipsterGenerator.extend({

    constructor: function (...args) { // eslint-disable-line object-shorthand
        generator.apply(this, args);

        this.option('default', {
            type: String,
            required: false,
            description: 'default option'
        });

        this.defaultOption = this.options.default;
    },

    initializing: {
        readConfig() {
            this.jhipsterAppConfig = this.getJhipsterAppConfig();
            if (!this.jhipsterAppConfig) {
                this.error('Can\'t read .yo-rc.json');
            }
        },
        readPackageJson() {
            const fromPath = 'package.json';
            this.libAngularVersion = ANGULAR_VERSION;
            if (shelljs.test('-f', fromPath)) {
                const fileData = this.fs.readJSON(fromPath);
                if (fileData && fileData.dependencies) {
                    if (fileData.dependencies['@angular/common']) {
                        this.libAngularVersion = fileData.dependencies['@angular/common'];
                    }
                    if (fileData.dependencies['@angular/animations']) {
                        this.libAngularAnimationsVersion = fileData.dependencies['@angular/animations'];
                    }
                    if (fileData.dependencies.primeng) {
                        this.libPrimeNgVersion = fileData.dependencies.primeng;
                    }
                    if (fileData.dependencies['primeng-extensions-wizard']) {
                        this.libPrimeNgExtensionsWizardVersion = fileData.dependencies['primeng-extensions-wizard'];
                    }
                    if (fileData.dependencies['chart.js']) {
                        this.libChartJsVersion = fileData.dependencies['chart.js'];
                    }
                }
            }
        },
        displayLogo() {
            // Have Yeoman greet the user.
            this.log('');
            this.log(`${chalk.red('██████╗  ██████╗  ██╗ ███╗   ███╗ ███████╗ ███╗   ██╗  ██████╗')}`);
            this.log(`${chalk.red('██╔══██╗ ██╔══██╗ ██║ ████╗ ████║ ██╔════╝ ████╗  ██║ ██╔════╝')}`);
            this.log(`${chalk.red('██████╔╝ ██████╔╝ ██║ ██╔████╔██║ █████╗   ██╔██╗ ██║ ██║  ███╗')}`);
            this.log(`${chalk.red('██╔═══╝  ██╔══██╗ ██║ ██║╚██╔╝██║ ██╔══╝   ██║╚██╗██║ ██║   ██║')}`);
            this.log(`${chalk.red('██║      ██║  ██║ ██║ ██║ ╚═╝ ██║ ███████╗ ██║ ╚████║ ╚██████╔╝')}`);
            this.log(`${chalk.red('╚═╝      ╚═╝  ╚═╝ ╚═╝ ╚═╝     ╚═╝ ╚══════╝ ╚═╝  ╚═══╝  ╚═════╝')}`);
            this.log(`\nWelcome to the ${chalk.bold.yellow('JHipster primeng')} generator! ${chalk.yellow(`v${packagejs.version}\n`)}`);
        },
        checkclientFramework() {
            if (this.jhipsterAppConfig.clientFramework !== 'angular4' && this.jhipsterAppConfig.clientFramework !== 'angularX') {
                this.env.error(`${chalk.red.bold('ERROR!')} This module works only for Angular4...`);
            }
        },
        checkJhipster() {
            const jhipsterVersion = this.jhipsterAppConfig.jhipsterVersion;
            const minimumJhipsterVersion = packagejs.dependencies['generator-jhipster'];
            if (!semver.satisfies(jhipsterVersion, minimumJhipsterVersion)) {
                this.warning(`\nYour generated project used an old JHipster version (${jhipsterVersion})... you need at least (${minimumJhipsterVersion})\n`);
            }
        }
    },

    prompting() {
        const done = this.async();
        const prompts = [
            {
                type: 'confirm',
                name: 'confirmation',
                message: 'Do you want to install PrimeNG?',
                default: true
            }
        ];

        this.prompt(prompts).then((props) => {
            this.props = props;
            // To access props later use this.props.someOption;
            done();
        });
    },

    writing() {
        if (this.defaultOption === undefined && !this.props.confirmation) {
            return;
        }

        // function to use directly template
        this.template = function (source, destination) {
            this.fs.copyTpl(
                this.templatePath(source),
                this.destinationPath(destination),
                this
            );
        };

        //this.template(MAIN_SRC_DIR + 'scss/main.scss', MAIN_SRC_DIR + 'scss/main.scss');

     /*   this.rewriteFile(
            'src/test/javascript/protractor.conf.js',
            'jhipster-needle-add-protractor-tests',
            `${dashboardSpec}`);

        this.copyHtml('_index.html', 'src/main/webapp/index.html');*/

        // init all variables
        this.anyError = false;

        this.enableTranslation = this.jhipsterAppConfig.enableTranslation;
        this.languages = this.jhipsterAppConfig.languages;
        this.baseName = this.jhipsterAppConfig.baseName;
        this.clientFramework = this.jhipsterAppConfig.clientFramework;
        this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;
        this.protractorTests = this.jhipsterAppConfig.testFrameworks.indexOf('protractor') !== -1;
        this.angular2AppName = this.getAngular2AppName();

        const CLIENT_MAIN_SRC_DIR = jhipsterConstants.CLIENT_MAIN_SRC_DIR;
        const CLIENT_TEST_SRC_DIR = jhipsterConstants.CLIENT_TEST_SRC_DIR;

        // add dependencies
        try {
            if (this.libAngularAnimationsVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json',
                    `"@angular/animations": "${this.libAngularAnimationsVersion}"`,
                    `"@angular/animations": "${this.libAngularVersion}"`);
            } else {
                this.addNpmDependency('@angular/animations', `${this.libAngularVersion}`);
            }

            if (this.libPrimeNgVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"primeng": "${this.libPrimeNgVersion}"`, `"primeng": "${PRIMENG_VERSION}"`);
            } else {
                this.addNpmDependency('primeng', `${PRIMENG_VERSION}`);
            }

            if (this.libPrimeNgExtensionsWizardVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"primeng-extensions-wizard": "${this.libPrimeNgExtensionsWizardVersion}"`, `"primeng-extensions-wizard": "${PRIMENG_EXT_WIZARD_VERSION}"`);
            } else {
                this.addNpmDependency('primeng-extensions-wizard', `${PRIMENG_EXT_WIZARD_VERSION}`);
            }

            if (this.libChartJsVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"chart.js": "${this.libChartJsVersion}"`, `"chart.js": "${CHARTJS_VERSION}"`);
            } else {
                this.addNpmDependency('chart.js', `${CHARTJS_VERSION}`);
            }
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Problem when adding the new librairies in your package.json');
            this.log('  You need to add manually:\n');
            this.log(`  "@angular/animations": "${this.libAngularVersion}",`);
            this.log(`  "primeng": "${PRIMENG_VERSION}"`);
            this.log(`  "primeng-extensions-wizard": "${PRIMENG_EXT_WIZARD_VERSION}"`);
            this.log(`  "chart.js": "${CHARTJS_VERSION}",`);
            this.log('');
            this.anyError = true;
        }

        // add module to app.module.ts
        try {
            this.addAngularModule(this.angular2AppName, 'Dashboard', 'dashboard', 'dashboard', this.enableTranslation, this.clientFramework);
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Problem when updating your app.module.ts');
            this.log('  You need to import manually the new dashboard.module.ts:\n');
            this.log(`${chalk.yellow.bold(`  import { ${this.angular2AppName}DashboardModule } from './dashboard/dashboard.module';`)}`);
            this.log('\n  and:\n');
            this.log(`${chalk.yellow.bold(`  ${this.angular2AppName}DashboardModule,`)}\n`);
            this.anyError = true;
        }

        // add element to menu
        let dashboardMenu;
        if (this.enableTranslation) {
            dashboardMenu = `<li *ngSwitchCase="true" ngbDropdown class="nav-item dropdown pointer" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <a class="nav-link dropdown-toggle" ngbDropdownToggle href="javascript:void(0);" id="dashboard-menu">
                    <span>
                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                        <span jhiTranslate="global.menu.dashboard.main">Dashboard</span>
                        <b class="caret"></b>
                    </span>
                </a>
                <ul class="dropdown-menu" ngbDropdownMenu>
                   <span tyle="font-weight:bold">Button Components</span>
                   <hr/>
                   <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="button" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.button">Button</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="splitbutton" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.splitbutton">SplitButton</span>
                        </a>
                    </li>
                   <hr/>
                   <span tyle="font-weight:bold">Input Components</span>
                   <hr/>
                   <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="button" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.inputgroup">InputGroup</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="splitbutton" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.splitbutton">SplitButton</span>
                        </a>
                    </li>
                   <hr/>
                   <span style="font-weight:bold">Chart Components</span>
                   <hr/>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="barchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bar-chart" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.barchart">BarChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="doughnutchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o-notch" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.doughnutchart">BarChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="linechart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-line-chart" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.linechart">LineChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="piechart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-pie-chart" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.piechart">PieChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="polarareachart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.polarareachart">PolarAreaChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="radarchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.dashboard.radarchart">RadarChart</span>
                        </a>
                    </li>
                </ul>
            </li>`;
        } else {
            dashboardMenu = `<li *ngSwitchCase="true" ngbDropdown class="nav-item dropdown pointer" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <a class="nav-link dropdown-toggle" ngbDropdownToggle href="javascript:void(0);" id="dashboard-menu">
                    <span>
                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                        <span>Dashboard</span>
                        <b class="caret"></b>
                    </span>
                </a>
                <ul class="dropdown-menu" ngbDropdownMenu>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="barchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bar-chart" aria-hidden="true"></i>
                            <span>BarChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="doughnutchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o-notch" aria-hidden="true"></i>
                            <span>DoughnutChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="linechart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-line-chart" aria-hidden="true"></i>
                            <span>LineChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="piechart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-pie-chart" aria-hidden="true"></i>
                            <span>PieChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="polarareachart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span>PolarAreaChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="radarchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span>RadarChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="button" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span>Button</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="splitbutton" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span>SplitButton</span>
                        </a>
                    </li>
                </ul>
            </li>`;
        }
        try {
            this.rewriteFile(
                'src/main/webapp/app/layouts/navbar/navbar.component.html',
                'jhipster-needle-add-element-to-menu',
                `${dashboardMenu}`);
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Missing needle \'jhipster-needle-add-element-to-menu\' in src/main/webapp/app/layouts/navbar/navbar.component.html');
            this.log('  You need to add manually the menu:\n');
            this.log(`            ${dashboardMenu}`);
            this.log('');
            this.anyError = true;
        }

        // add protractor tests
        if (this.protractorTests) {
            const dashboardSpec = '\'./e2e/dashboard/dashboard.spec.ts\',';
            try {
                this.rewriteFile(
                    'src/test/javascript/protractor.conf.js',
                    'jhipster-needle-add-protractor-tests',
                    `${dashboardSpec}`);
            } catch (e) {
                this.log(`${chalk.red.bold('ERROR!')}`);
                this.log('  Missing needle \'jhipster-needle-add-protractor-tests\' in src/test/javascript/protractor.conf.js');
                this.log('  You need to add manually in specs item:\n');
                this.log(`            ${dashboardSpec}`);
                this.log('');
                this.anyError = true;
            }
            this.template('src/test/javascript/e2e/dashboard/_dashboard.spec.ts', 'src/test/javascript/e2e/dashboard/dashboard.spec.ts');
        }

        // add chart to vendor
        try {
            this.rewriteFile(
                'src/main/webapp/app/vendor.ts',
                'jhipster-needle-add-element-to-vendor',
                'import \'chart.js/src/chart.js\';');
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Missing needle \'jhipster-needle-add-element-to-vendor\' in src/main/webapp/app/vendor.ts');
            this.log('  You need to add manually:\n');
            this.log(`${chalk.yellow.bold('import \'chart.js/src/chart.js\';')}`);
            this.log('');
            this.anyError = true;
        }

        // copy all translations
        if (this.enableTranslation) {
            const dashboardTranslation = `"dashboard": {
                "main": "Dashboard",
                "barchart": "BarChart",
                "doughnutchart": "DoughnutChart",
                "linechart": "LineChart",
                "piechart": "PieChart",
                "polarareachart": "PolarAreaChart",
                "radarchart": "RadarChart",
                "button": "Button",
                "splitbutton": "SplitButton"
            },`;
            this.languages.forEach((language) => {
                this.template('src/main/webapp/i18n/en/dashboard.json', `src/main/webapp/i18n/${language}/dashboard.json`);
                try {
                    this.rewriteFile(
                        `src/main/webapp/i18n/${language}/global.json`,
                        'jhipster-needle-menu-add-element',
                        `${dashboardTranslation}`);
                } catch (e) {
                    this.log(`${chalk.red.bold('ERROR!')}`);
                    this.log(`  Missing needle 'jhipster-needle-menu-add-element' in src/main/webapp/i18n/${language}/global.json`);
                    this.log('  You need to add manually:');
                    this.log(`${dashboardTranslation}`);
                    this.log('');
                    this.anyError = true;
                }
            });
        }

        // copy all dashboard files
        this.template('src/main/webapp/app/dashboard/dashboard.module.ts', 'src/main/webapp/app/dashboard/dashboard.module.ts');

        this.template('src/main/webapp/app/dashboard/charts/barchart/index.ts', 'src/main/webapp/app/dashboard/charts/barchart/index.ts');
        this.template('src/main/webapp/app/dashboard/charts/barchart/barchartdemo.component.html', 'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.component.html');
        this.template('src/main/webapp/app/dashboard/charts/barchart/barchartdemo.component.ts', 'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.component.ts');
        this.template('src/main/webapp/app/dashboard/charts/barchart/barchartdemo.module.ts', 'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.module.ts');
        this.template('src/main/webapp/app/dashboard/charts/barchart/barchartdemo.route.ts', 'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.route.ts');

        this.template('src/main/webapp/app/dashboard/charts/doughnutchart/index.ts', 'src/main/webapp/app/dashboard/charts/doughnutchart/index.ts');
        this.template('src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.component.html', 'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.component.html');
        this.template('src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.component.ts', 'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.component.ts');
        this.template('src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.module.ts', 'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.module.ts');
        this.template('src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.route.ts', 'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.route.ts');

        this.template('src/main/webapp/app/dashboard/charts/linechart/index.ts', 'src/main/webapp/app/dashboard/charts/linechart/index.ts');
        this.template('src/main/webapp/app/dashboard/charts/linechart/linechartdemo.component.html', 'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.component.html');
        this.template('src/main/webapp/app/dashboard/charts/linechart/linechartdemo.component.ts', 'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.component.ts');
        this.template('src/main/webapp/app/dashboard/charts/linechart/linechartdemo.module.ts', 'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.module.ts');
        this.template('src/main/webapp/app/dashboard/charts/linechart/linechartdemo.route.ts', 'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.route.ts');

        this.template('src/main/webapp/app/dashboard/charts/piechart/index.ts', 'src/main/webapp/app/dashboard/charts/piechart/index.ts');
        this.template('src/main/webapp/app/dashboard/charts/piechart/piechartdemo.component.html', 'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.component.html');
        this.template('src/main/webapp/app/dashboard/charts/piechart/piechartdemo.component.ts', 'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.component.ts');
        this.template('src/main/webapp/app/dashboard/charts/piechart/piechartdemo.module.ts', 'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.module.ts');
        this.template('src/main/webapp/app/dashboard/charts/piechart/piechartdemo.route.ts', 'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.route.ts');

        this.template('src/main/webapp/app/dashboard/charts/polarareachart/index.ts', 'src/main/webapp/app/dashboard/charts/polarareachart/index.ts');
        this.template('src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.component.html', 'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.component.html');
        this.template('src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.component.ts', 'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.component.ts');
        this.template('src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.module.ts', 'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.module.ts');
        this.template('src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.route.ts', 'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.route.ts');

        this.template('src/main/webapp/app/dashboard/charts/radarchart/index.ts', 'src/main/webapp/app/dashboard/charts/radarchart/index.ts');
        this.template('src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.component.html', 'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.component.html');
        this.template('src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.component.ts', 'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.component.ts');
        this.template('src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.module.ts', 'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.module.ts');
        this.template('src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.route.ts', 'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.route.ts');

        this.template('src/main/webapp/app/dashboard/buttons/button/index.ts', 'src/main/webapp/app/dashboard/buttons/button/index.ts');
        this.template('src/main/webapp/app/dashboard/buttons/button/buttondemo.component.html', 'src/main/webapp/app/dashboard/buttons/button/buttondemo.component.html');
        this.template('src/main/webapp/app/dashboard/buttons/button/buttondemo.component.ts', 'src/main/webapp/app/dashboard/buttons/button/buttondemo.component.ts');
        this.template('src/main/webapp/app/dashboard/buttons/button/buttondemo.module.ts', 'src/main/webapp/app/dashboard/buttons/button/buttondemo.module.ts');
        this.template('src/main/webapp/app/dashboard/buttons/button/buttondemo.route.ts', 'src/main/webapp/app/dashboard/buttons/button/buttondemo.route.ts');

        this.template('src/main/webapp/app/dashboard/buttons/splitbutton/index.ts', 'src/main/webapp/app/dashboard/buttons/splitbutton/index.ts');
        this.template('src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.component.html', 'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.component.html');
        this.template('src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.component.ts', 'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.component.ts');
        this.template('src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.module.ts', 'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.module.ts');
        this.template('src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.route.ts', 'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.route.ts');
    },

    install() {
        if (!this.props.confirmation) {
            return;
        }
        if (!this.anyError) {
            const logMsg = `To install your dependencies manually, run: ${chalk.yellow.bold(`${this.clientPackageManager} install`)}`;
            const injectDependenciesAndConstants = (err) => {
                if (err) {
                    this.warning('Install of dependencies failed!');
                    this.log(logMsg);
                }
            };
            const installConfig = {
                bower: false,
                npm: this.clientPackageManager !== 'yarn',
                yarn: this.clientPackageManager === 'yarn',
                callback: injectDependenciesAndConstants
            };
            this.installDependencies(installConfig);
        } else {
            this.log('');
            if (this.clientPackageManager === 'yarn') {
                this.warning(`There is some problem. You need to resolve them, and launch ${chalk.yellow.bold('yarn install')}`);
            } else {
                this.warning(`There is some problem. You need to resolve them, and launch ${chalk.yellow.bold('npm install')}`);
            }
        }
    },

    end() {
        this.log('End of primeng components generator');
    }
});
