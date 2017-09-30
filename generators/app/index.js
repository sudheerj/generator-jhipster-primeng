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

let themeName = 'omega';

const THEME_OPTIONS = [
    {
        value: 'omega',
        name: 'Omega'
    },
    {
        value: 'cruze',
        name: 'Cruze'
    },
    {
        value: 'darkness',
        name: 'Darkness'
    },
    {
        value: 'home',
        name: 'Home'
    },
    {
        value: 'bootstrap',
        name: 'Bootstrap'
    }
];

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
            },
            {
            type: 'list',
            name: 'theme',
            message: response => this.getNumberedQuestion('Which theme would you like to use?', true),
            choices: THEME_OPTIONS,
            default: 'omega'
            },
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

        themeName = this.props["theme"];

        // function to use directly template
        this.template = function (source, destination) {
            this.fs.copyTpl(
                this.templatePath(source),
                this.destinationPath(destination),
                this
            );
        };

        const CLIENT_MAIN_SRC_DIR = jhipsterConstants.CLIENT_MAIN_SRC_DIR;
        const CLIENT_TEST_SRC_DIR = jhipsterConstants.CLIENT_TEST_SRC_DIR;

       //this.template(CLIENT_MAIN_SRC_DIR + 'content/scss/primeng-resources.scss', CLIENT_MAIN_SRC_DIR + 'content/scss/primeng-resources.scss');
        /*this.rewriteFile(
            'src/main/webapp/content/scss/primeng-resources.scss',
            'jhipster-needle-scss-add-vendor',
            `@import "~primeng/resources/themes/${themeName}/theme.css";`);
*/
        this.addMainSCSSStyle(`@import "~primeng/resources/primeng.min.css";
                               @import "~primeng/resources/themes/${themeName}/theme.css";` , 'PrimeNG Resources')
        // init all variables
        this.anyError = false;

        this.enableTranslation = this.jhipsterAppConfig.enableTranslation;
        this.languages = this.jhipsterAppConfig.languages;
        this.baseName = this.jhipsterAppConfig.baseName;
        this.clientFramework = this.jhipsterAppConfig.clientFramework;
        this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;
        this.protractorTests = this.jhipsterAppConfig.testFrameworks.indexOf('protractor') !== -1;
        this.angular2AppName = this.getAngular2AppName();



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
            this.addAngularModule(this.angular2AppName, 'primeng', 'primeng', 'primeng', this.enableTranslation, this.clientFramework);
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Problem when updating your app.module.ts');
            this.log('  You need to import manually the new primeng.module.ts:\n');
            this.log(`${chalk.yellow.bold(`  import { ${this.angular2AppName}primengModule } from './primeng/primeng.module';`)}`);
            this.log('\n  and:\n');
            this.log(`${chalk.yellow.bold(`  ${this.angular2AppName}primengModule,`)}\n`);
            this.anyError = true;
        }

        //let primengResources =`import './primeng-resources.scss';`;

        // add element to menu
        let primengMenu;
        if (this.enableTranslation) {
            primengMenu = `<li *ngSwitchCase="true" ngbDropdown class="nav-item dropdown pointer" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <a class="nav-link dropdown-toggle" ngbDropdownToggle href="javascript:void(0);" id="primeng-menu">
                    <span>
                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                        <span jhiTranslate="global.menu.primeng.main">primeng</span>
                        <b class="caret"></b>
                    </span>
                </a>
                <ul class="dropdown-menu" ngbDropdownMenu>
                   <span tyle="font-weight:bold">Input Components</span>
                   <hr/>
                   <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputtext" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputtext">InputText</span>
                        </a>
                    </li>
                   <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputgroup" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputgroup">InputGroup</span>
                        </a>
                    </li>
                   
                   <hr/>
                   <span tyle="font-weight:bold">Button Components</span>
                   <hr/>
                   <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="button" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.button">Button</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="splitbutton" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.splitbutton">SplitButton</span>
                        </a>
                    </li>
                   <hr/>
                   <span style="font-weight:bold">Chart Components</span>
                   <hr/>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="barchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bar-chart" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.barchart">BarChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="doughnutchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o-notch" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.doughnutchart">BarChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="linechart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-line-chart" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.linechart">LineChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="piechart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-pie-chart" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.piechart">PieChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="polarareachart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-bullseye" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.polarareachart">PolarAreaChart</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="radarchart" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.radarchart">RadarChart</span>
                        </a>
                    </li>
                </ul>
            </li>`;
        } else {
            primengMenu = `<li *ngSwitchCase="true" ngbDropdown class="nav-item dropdown pointer" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <a class="nav-link dropdown-toggle" ngbDropdownToggle href="javascript:void(0);" id="primeng-menu">
                    <span>
                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                        <span>primeng</span>
                        <b class="caret"></b>
                    </span>
                </a>
                <ul class="dropdown-menu" ngbDropdownMenu>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputtext" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span>InputText</span>
                        </a>
                    </li>
                    <li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputgroup" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-star-o" aria-hidden="true"></i>
                            <span>InputGroup</span>
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
                </ul>
            </li>`;
        }
        try {
            this.rewriteFile(
                'src/main/webapp/app/layouts/navbar/navbar.component.html',
                'jhipster-needle-add-element-to-menu',
                `${primengMenu}`);
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Missing needle \'jhipster-needle-add-element-to-menu\' in src/main/webapp/app/layouts/navbar/navbar.component.html');
            this.log('  You need to add manually the menu:\n');
            this.log(`            ${primengMenu}`);
            this.log('');
            this.anyError = true;
        }

        // add protractor tests
        if (this.protractorTests) {
            const primengSpec = '\'./e2e/primeng/primeng.spec.ts\',';
            try {
                this.rewriteFile(
                    'src/test/javascript/protractor.conf.js',
                    'jhipster-needle-add-protractor-tests',
                    `${primengSpec}`);
            } catch (e) {
                this.log(`${chalk.red.bold('ERROR!')}`);
                this.log('  Missing needle \'jhipster-needle-add-protractor-tests\' in src/test/javascript/protractor.conf.js');
                this.log('  You need to add manually in specs item:\n');
                this.log(`            ${primengSpec}`);
                this.log('');
                this.anyError = true;
            }
            this.template('src/test/javascript/e2e/primeng/_primeng.spec.ts', 'src/test/javascript/e2e/primeng/primeng.spec.ts');
        }

        // add chart to vendor
        try {
            /*this.rewriteFile(
                'src/main/webapp/content/scss/vendor.scss',
                'jhipster-needle-scss-add-vendor',
                `${primengResources}`);*/
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
            const primengTranslation = `"primeng": {
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
                "inputtext":"InputText"
            },`;
            this.languages.forEach((language) => {
                this.template('src/main/webapp/i18n/en/primeng.json', `src/main/webapp/i18n/${language}/primeng.json`);
                try {
                    this.rewriteFile(
                        `src/main/webapp/i18n/${language}/global.json`,
                        'jhipster-needle-menu-add-element',
                        `${primengTranslation}`);
                } catch (e) {
                    this.log(`${chalk.red.bold('ERROR!')}`);
                    this.log(`  Missing needle 'jhipster-needle-menu-add-element' in src/main/webapp/i18n/${language}/global.json`);
                    this.log('  You need to add manually:');
                    this.log(`${primengTranslation}`);
                    this.log('');
                    this.anyError = true;
                }
            });
        }

        // copy all primeng files
        this.template('src/main/webapp/app/primeng/primeng.module.ts', 'src/main/webapp/app/primeng/primeng.module.ts');

        this.template('src/main/webapp/app/primeng/charts/barchart/index.ts', 'src/main/webapp/app/primeng/charts/barchart/index.ts');
        this.template('src/main/webapp/app/primeng/charts/barchart/barchartdemo.component.html', 'src/main/webapp/app/primeng/charts/barchart/barchartdemo.component.html');
        this.template('src/main/webapp/app/primeng/charts/barchart/barchartdemo.component.ts', 'src/main/webapp/app/primeng/charts/barchart/barchartdemo.component.ts');
        this.template('src/main/webapp/app/primeng/charts/barchart/barchartdemo.module.ts', 'src/main/webapp/app/primeng/charts/barchart/barchartdemo.module.ts');
        this.template('src/main/webapp/app/primeng/charts/barchart/barchartdemo.route.ts', 'src/main/webapp/app/primeng/charts/barchart/barchartdemo.route.ts');

        this.template('src/main/webapp/app/primeng/charts/doughnutchart/index.ts', 'src/main/webapp/app/primeng/charts/doughnutchart/index.ts');
        this.template('src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.component.html', 'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.component.html');
        this.template('src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.component.ts', 'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.component.ts');
        this.template('src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.module.ts', 'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.module.ts');
        this.template('src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.route.ts', 'src/main/webapp/app/primeng/charts/doughnutchart/doughnutchartdemo.route.ts');

        this.template('src/main/webapp/app/primeng/charts/linechart/index.ts', 'src/main/webapp/app/primeng/charts/linechart/index.ts');
        this.template('src/main/webapp/app/primeng/charts/linechart/linechartdemo.component.html', 'src/main/webapp/app/primeng/charts/linechart/linechartdemo.component.html');
        this.template('src/main/webapp/app/primeng/charts/linechart/linechartdemo.component.ts', 'src/main/webapp/app/primeng/charts/linechart/linechartdemo.component.ts');
        this.template('src/main/webapp/app/primeng/charts/linechart/linechartdemo.module.ts', 'src/main/webapp/app/primeng/charts/linechart/linechartdemo.module.ts');
        this.template('src/main/webapp/app/primeng/charts/linechart/linechartdemo.route.ts', 'src/main/webapp/app/primeng/charts/linechart/linechartdemo.route.ts');

        this.template('src/main/webapp/app/primeng/charts/piechart/index.ts', 'src/main/webapp/app/primeng/charts/piechart/index.ts');
        this.template('src/main/webapp/app/primeng/charts/piechart/piechartdemo.component.html', 'src/main/webapp/app/primeng/charts/piechart/piechartdemo.component.html');
        this.template('src/main/webapp/app/primeng/charts/piechart/piechartdemo.component.ts', 'src/main/webapp/app/primeng/charts/piechart/piechartdemo.component.ts');
        this.template('src/main/webapp/app/primeng/charts/piechart/piechartdemo.module.ts', 'src/main/webapp/app/primeng/charts/piechart/piechartdemo.module.ts');
        this.template('src/main/webapp/app/primeng/charts/piechart/piechartdemo.route.ts', 'src/main/webapp/app/primeng/charts/piechart/piechartdemo.route.ts');

        this.template('src/main/webapp/app/primeng/charts/polarareachart/index.ts', 'src/main/webapp/app/primeng/charts/polarareachart/index.ts');
        this.template('src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.component.html', 'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.component.html');
        this.template('src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.component.ts', 'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.component.ts');
        this.template('src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.module.ts', 'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.module.ts');
        this.template('src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.route.ts', 'src/main/webapp/app/primeng/charts/polarareachart/polarareachartdemo.route.ts');

        this.template('src/main/webapp/app/primeng/charts/radarchart/index.ts', 'src/main/webapp/app/primeng/charts/radarchart/index.ts');
        this.template('src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.component.html', 'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.component.html');
        this.template('src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.component.ts', 'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.component.ts');
        this.template('src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.module.ts', 'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.module.ts');
        this.template('src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.route.ts', 'src/main/webapp/app/primeng/charts/radarchart/radarchartdemo.route.ts');

        this.template('src/main/webapp/app/primeng/buttons/button/index.ts', 'src/main/webapp/app/primeng/buttons/button/index.ts');
        this.template('src/main/webapp/app/primeng/buttons/button/buttondemo.component.html', 'src/main/webapp/app/primeng/buttons/button/buttondemo.component.html');
        this.template('src/main/webapp/app/primeng/buttons/button/buttondemo.component.ts', 'src/main/webapp/app/primeng/buttons/button/buttondemo.component.ts');
        this.template('src/main/webapp/app/primeng/buttons/button/buttondemo.module.ts', 'src/main/webapp/app/primeng/buttons/button/buttondemo.module.ts');
        this.template('src/main/webapp/app/primeng/buttons/button/buttondemo.route.ts', 'src/main/webapp/app/primeng/buttons/button/buttondemo.route.ts');

        this.template('src/main/webapp/app/primeng/buttons/splitbutton/index.ts', 'src/main/webapp/app/primeng/buttons/splitbutton/index.ts');
        this.template('src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.html', 'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.html');
        this.template('src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.ts', 'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.ts');
        this.template('src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.module.ts', 'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.module.ts');
        this.template('src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.route.ts', 'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.route.ts');

        this.template('src/main/webapp/app/primeng/inputs/inputtext/index.ts', 'src/main/webapp/app/primeng/inputs/inputtext/index.ts');
        this.template('src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.component.html', 'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.component.html');
        this.template('src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.component.ts', 'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.component.ts');
        this.template('src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.module.ts', 'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.module.ts');
        this.template('src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.route.ts', 'src/main/webapp/app/primeng/inputs/inputtext/inputtextdemo.route.ts');

        this.template('src/main/webapp/app/primeng/inputs/inputgroup/index.ts', 'src/main/webapp/app/primeng/inputs/inputgroup/index.ts');
        this.template('src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.component.html', 'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.component.html');
        this.template('src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.component.ts', 'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.component.ts');
        this.template('src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.module.ts', 'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.module.ts');
        this.template('src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.route.ts', 'src/main/webapp/app/primeng/inputs/inputgroup/inputgroupdemo.route.ts');
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
