import * as CONSTANTS from './constants/constants';
import * as DEMO_CONSTANTS from './constants/demo-constants';

const util = require('util');
const chalk = require('chalk');
const generator = require('yeoman-generator');
const packagejs = require('../../package.json');
const semver = require('semver');
const shelljs = require('shelljs');
const fs = require('fs');
const inquirer = require('inquirer');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

const JhipsterGenerator = generator.extend({});
util.inherits(JhipsterGenerator, BaseGenerator);

const CLIENT_MAIN_SRC_DIR = jhipsterConstants.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = jhipsterConstants.CLIENT_TEST_SRC_DIR;

let themeName = 'nova-colored';


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
            this.libAngularVersion = CONSTANTS.ANGULAR_VERSION;
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
                    if (fileData.dependencies['primeng-extensions']) {
                        this.libPrimeNgExtensionsVersion = fileData.dependencies['primeng-extensions'];
                    }

                    if (fileData.dependencies['chart.js']) {
                        this.libChartJsVersion = fileData.dependencies['chart.js'];
                    }
                    if (fileData.dependencies.primeicons) {
                        this.libPrimeIconsVersion = fileData.dependencies.primeicons;
                    }
                    if (fileData.dependencies.primeflex) {
                        this.libPrimeFlexVersion = fileData.dependencies.primeflex;
                    }

                    if (fileData.dependencies.moment) {
                        this.libMomentVersion = fileData.dependencies.moment;
                    }

                    if (fileData.dependencies.fullcalendar) {
                        this.libFullcalendarVersion = fileData.dependencies.fullcalendar;
                    }

                    if (fileData.dependencies.quill) {
                        this.libQuillVersion = fileData.dependencies.quill;
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
            if (this.jhipsterAppConfig.clientFramework !== 'angular5' && this.jhipsterAppConfig.clientFramework !== 'angularX') {
                this.env.error(`${chalk.red.bold('ERROR!')} This module works only for Angular5...`);
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
                message: 'Which theme would you like to use?',
                choices: CONSTANTS.THEME_OPTIONS,
                paginated: true,
                pageSize: 10,
                default: 'omega'
            },
            {
                type: 'list',
                name: 'selectionCriteria',
                message: 'What is your preferred component selection criteria',
                choices: [{ name: 'Component Groups', value: 'group' }, { name: 'Individual Components', value: 'component' }],
                default: 'group'
            },
            {
                type: 'checkbox',
                name: 'componentGroups',
                message: 'Which component groups you would like to use?',
                choices: CONSTANTS.COMPONENT_GROUP_CHOICE_LIST,
                when(response) {
                    return response.selectionCriteria === 'group';
                },
                validate(answer) {
                    if (answer.length < 1) {
                        return 'You must choose at least one group.';
                    }
                    return true;
                }
            },
            {
                type: 'checkbox',
                name: 'componentList',
                message: 'Which components you would like to use?',
                choices: CONSTANTS.COMPONENT_CHOICE_LIST,
                paginated: true,
                pageSize: 10,
                when(response) {
                    return response.selectionCriteria === 'component';
                },
                validate(answer) {
                    if (answer.length < 1) {
                        return 'You must choose at least one component.';
                    }
                    return true;
                }
            }
        ];

        this.prompt(prompts).then((props) => {
            this.props = props;
            this.selectAll = this.props.selectAll;
            // To access props later use this.props.someOption;
            done();
        });
    },

    writing() {
        if (this.defaultOption === undefined && !this.props.confirmation) {
            return;
        }

        themeName = this.props.theme;
        this.categories = this.props.componentGroups;
        this.componentList = this.props.componentList;

        // function to use directly template
        this.template = function (source, destination) {
            this.fs.copyTpl(
                this.templatePath(source),
                this.destinationPath(destination),
                this
            );
        };

        // function to use directly template
        this.copyImageFiles = function (source, destination) {
            this.fs.copy(
                this.templatePath(source),
                this.destinationPath(destination)
            );
        };

        const primengResources = `\n@import "~primeicons/primeicons.css";\n@import "~primeicons/primeicons.css";\n@import "~primeng/resources/primeng.min.css";\n@import "~primeng-extensions/resources/primeng-extensions.min.css";\n @import "~primeng/resources/themes/${themeName}/theme.css";\n @import "~quill/dist/quill.core.css";\n @import "~quill/dist/quill.snow.css";`;
        const primengRootResources = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                                      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.css"/>
                                      <script src="https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha" async defer></script>
                                      <script src="https://cdn.quilljs.com/1.1.8/quill.js"></script>  
                                      <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyA6Ar0UymhiklJBzEPLKKn2QHwbjdz3XV0" ></script>
                                      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.0/moment.min.js"></script>
                                      <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js"></script>\n`;

        if (this.copyExternalAssetsInWebpack) {
            this.copyExternalAssetsInWebpack('primeng', 'primeng');
        } else {
            this.log(`${chalk.yellow('WARNING the function copyExternalAssetsInWebpack is missing, you need to add the missing resource path in webpack.common.ts:')}`);
            this.log(`${`${chalk.yellow('  - inside CopyWebpackPlugin function of webpack.common.ts file: ')}{ from: './src/main/webapp/content/primeng', to: 'content/primeng'}`}`);
        }

        if (this.addExternalResourcesToRoot) {
            this.addExternalResourcesToRoot(`${primengRootResources}`, 'PrimeNG resources added here');
            this.log(`${chalk.yellow('Add the resources in the head section of index.html file- ')} ${primengRootResources}`);
        } else {
            this.log(`${chalk.yellow('WARNING the function addExternalResourcesToRoot is missing, you need to add the missing resource path in the head section of index.html file:')}`);
            this.log(`${chalk.yellow('Add the resources- ')} ${primengRootResources}`);
        }

        if (this.addVendorSCSSStyle) {
            this.addVendorSCSSStyle(primengResources, 'PrimeNG and it\'s third-party dependencies resources');
            this.log('The PrimeNG resources were updated successfully using JHipster API!');
        } else {
            // append PrimeNG resources using appendFile
            const temp = this;
            fs.stat(`${CLIENT_MAIN_SRC_DIR}content/scss/vendor.scss`, (err, stat) => {
                if (err == null) {
                    // Exist
                    fs.appendFile(`${CLIENT_MAIN_SRC_DIR}content/scss/vendor.scss`,
                        primengResources, (err) => {
                            if (err) throw err;
                            temp.log('The PrimeNG resources were updated!');
                        });
                } else if (err.code === 'ENOENT') {
                    // NO exist
                    temp.log(`The File ${CLIENT_MAIN_SRC_DIR}content/scss/vendor.scss doesn't exist!`);
                }
            });
        }

        // init all variables
        this.anyError = false;

        this.enableTranslation = this.jhipsterAppConfig.enableTranslation;
        this.languages = this.jhipsterAppConfig.languages;
        this.baseName = this.jhipsterAppConfig.baseName;
        this.clientFramework = this.jhipsterAppConfig.clientFramework;
        this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;
        this.protractorTests = this.jhipsterAppConfig.testFrameworks.indexOf('protractor') !== -1;
        this.angularXAppName = this.getAngularXAppName();


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
                this.replaceContent('package.json', `"primeng": "${this.libPrimeNgVersion}"`, `"primeng": "${CONSTANTS.PRIMENG_VERSION}"`);
            } else {
                this.addNpmDependency('primeng', `${CONSTANTS.PRIMENG_VERSION}`);
            }

            if (this.libPrimeNgExtensionsVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"primeng-extensions": "${this.libPrimeNgExtensionsVersion}"`, `"primeng-extensions": "${CONSTANTS.PRIMENG_EXTENSIONS_VERSION}"`);
            } else {
                this.addNpmDependency('primeng-extensions', `${CONSTANTS.PRIMENG_EXTENSIONS_VERSION}`);
            }

            if (this.libChartJsVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"chart.js": "${this.libChartJsVersion}"`, `"chart.js": "${CONSTANTS.CHARTJS_VERSION}"`);
            } else {
                this.addNpmDependency('chart.js', `${CONSTANTS.CHARTJS_VERSION}`);
            }

            if (this.libPrimeIconsVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"primeicons": "${this.libPrimeIconsVersion}"`, `"primeicons": "${CONSTANTS.PRIMEICONS_VERSION}"`);
            } else {
                this.addNpmDependency('primeicons', `${CONSTANTS.PRIMEICONS_VERSION}`);
            }

            if (this.libPrimeFlexVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"primeflex": "${this.libPrimeFlexVersion}"`, `"primeflex": "${CONSTANTS.PRIMEFLEX_VERSION}"`);
            } else {
                this.addNpmDependency('primeflex', `${CONSTANTS.PRIMEFLEX_VERSION}`);
            }

            if (this.libFullcalendarVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"moment": "${this.libMomentVersion}"`, `"moment": "${CONSTANTS.MOMENT_VERSION}"`);
                this.replaceContent('package.json', `"fullcalendar": "${this.libFullcalendarVersion}"`, `"fullcalendar": "${CONSTANTS.FULLCALENDAR_VERSION}"`);
            } else {
                this.addNpmDependency('moment', `${CONSTANTS.MOMENT_VERSION}`);
                this.addNpmDependency('fullcalendar', `${CONSTANTS.FULLCALENDAR_VERSION}`);
            }

            if (this.libQuillVersion) {
                // the version already exists, so try to upgrade instead
                this.replaceContent('package.json', `"quill": "${this.libQuillVersion}"`, `"quill": "${CONSTANTS.QUILL_VERSION}"`);
            } else {
                this.addNpmDependency('quill', `${CONSTANTS.QUILL_VERSION}`);
            }
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Problem when adding the new librairies in your package.json');
            this.log('  You need to add manually:\n');
            this.log(`  "@angular/animations": "${this.libAngularVersion}",`);
            this.log(`  "primeng": "${CONSTANTS.PRIMENG_VERSION}",`);
            this.log(`  "primeng-extensions": "${CONSTANTS.PRIMENG_EXTENSIONS_VERSION}",`);
            this.log(`  "chart.js": "${CONSTANTS.CHARTJS_VERSION}",`);
            this.log(`  "primeicons": "${CONSTANTS.PRIMEICONS_VERSION}",`);
            this.log(`  "primeflex": "${CONSTANTS.PRIMEFLEX_VERSION}",`);
            this.log(`  "moment": "${CONSTANTS.MOMENT_VERSION}",`);
            this.log(`  "fullcalendar": "${CONSTANTS.FULLCALENDAR_VERSION}",`);
            this.log(`  "quill": "${CONSTANTS.QUILL_VERSION}",`);
            this.log('');
            this.anyError = true;
        }

        // add module to app.module.ts
        try {
            this.addAngularModule(this.angularXAppName, 'primeng', 'primeng', 'primeng', this.enableTranslation, this.clientFramework);
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Problem when updating your app.module.ts');
            this.log('  You need to import manually the new primeng.module.ts:\n');
            this.log(`${chalk.yellow.bold(`  import { ${this.angularXAppName}primengModule } from './primeng/primeng.module';`)}`);
            this.log('\n  and:\n');
            this.log(`${chalk.yellow.bold(`  ${this.angularXAppName}primengModule,`)}\n`);
            this.anyError = true;
        }
        this.inputComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputtext" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputtext">InputText</span>
                        </a>
                    </li>`;
        this.inputtextareaComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputtextarea" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputtextarea">InputTextArea</span>
                        </a>
                    </li>`;
        this.inputgroupComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputgroup" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputgroup">InputGroup</span>
                        </a>
                    </li>`;
        this.calendarComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="calendar" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.calendar">Calendar</span>
                        </a>
                    </li>`;
        this.chipsComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="chips" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.chips">Chips</span>
                        </a>
                    </li>`;
        this.inputswitchComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputswitch" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputswitch">InputSwitch</span>
                        </a>
                    </li>`;
        this.inputmaskComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="inputmask" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.inputmask">InputMask</span>
                        </a>
                    </li>`;
        this.passwordindicatorComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="passwordindicator" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.passwordindicator">Password Indicator</span>
                        </a>
                    </li>`;
        this.ratingComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="rating" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.rating">Rating</span>
                        </a>
                    </li>`;
        this.keyfilterComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="keyfilter" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.keyfilter">KeyFilter</span>
                        </a>
                    </li>`;
        this.spinnerComponent = `<li uiSrefActive="active">
                                    <a class="dropdown-item" routerLink="spinner" routerLinkActive="active" (click)="collapseNavbar()">
                                        <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                        <span jhiTranslate="global.menu.primeng.spinner">Spinner</span>
                                    </a>
                                 </li>`;
        this.togglebuttonComponent = `<li uiSrefActive="active">
                                        <a class="dropdown-item" routerLink="togglebutton" routerLinkActive="active" (click)="collapseNavbar()">
                                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                            <span jhiTranslate="global.menu.primeng.togglebutton">ToggleButton</span>
                                        </a>
                                      </li>`;
        this.autocompleteComponent = `<li uiSrefActive="active">
                                        <a class="dropdown-item" routerLink="autocomplete" routerLinkActive="active" (click)="collapseNavbar()">
                                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                            <span jhiTranslate="global.menu.primeng.autocomplete">AutoComplete</span>
                                        </a>
                                      </li>`;
        this.checkboxComponent = `<li uiSrefActive="active">
                                    <a class="dropdown-item" routerLink="checkbox" routerLinkActive="active" (click)="collapseNavbar()">
                                        <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                        <span jhiTranslate="global.menu.primeng.checkbox">Checkbox&TrieCheckbox</span>
                                    </a>
                                  </li>`;
        this.colorpickerComponent = `<li uiSrefActive="active">
                                        <a class="dropdown-item" routerLink="colorpicker" routerLinkActive="active" (click)="collapseNavbar()">
                                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                            <span jhiTranslate="global.menu.primeng.colorpicker">ColorPicker</span>
                                        </a>
                                     </li>`;
        this.editorComponent = `<li uiSrefActive="active">
                                        <a class="dropdown-item" routerLink="editor" routerLinkActive="active" (click)="collapseNavbar()">
                                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                            <span jhiTranslate="global.menu.primeng.editor">Editor</span>
                                        </a>
                                </li>`;
        this.listboxComponent = `<li uiSrefActive="active">
                                    <a class="dropdown-item" routerLink="listbox" routerLinkActive="active" (click)="collapseNavbar()">
                                        <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                        <span jhiTranslate="global.menu.primeng.listbox">Listbox</span>
                                    </a>
                                 </li>`;
        this.selectComponent = `<li uiSrefActive="active">
                                    <a class="dropdown-item" routerLink="select" routerLinkActive="active" (click)="collapseNavbar()">
                                        <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                        <span jhiTranslate="global.menu.primeng.select">MultiSelect&Dropdown</span>
                                    </a>
                                </li>`;
        this.radiobuttonComponent = `<li uiSrefActive="active">
                                        <a class="dropdown-item" routerLink="radiobutton" routerLinkActive="active" (click)="collapseNavbar()">
                                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                            <span jhiTranslate="global.menu.primeng.radiobutton">RadioButton</span>
                                        </a>
                                     </li>`;
        this.sliderComponent = `<li uiSrefActive="active">
                                    <a class="dropdown-item" routerLink="slider" routerLinkActive="active" (click)="collapseNavbar()">
                                        <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                        <span jhiTranslate="global.menu.primeng.slider">Slider</span>
                                    </a>
                                </li>`;
        this.selectbuttonComponent = `<li uiSrefActive="active">
                                        <a class="dropdown-item" routerLink="selectbutton" routerLinkActive="active" (click)="collapseNavbar()">
                                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                                            <span jhiTranslate="global.menu.primeng.selectbutton">SelectButton</span>
                                        </a>
                                      </li>`;
        this.messageComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="messages" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.messages">Messages</span>
                        </a>
                    </li>`;
        this.growlComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="growl" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.growl">Growl</span>
                        </a>
                    </li>`;
        this.toastComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="toast" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.toast">Toast</span>
                        </a>
                    </li>`;
        this.galleriaComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="galleria" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.galleria">Galleria</span>
                        </a>
                    </li>`;
        this.fileuploadComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="fileupload" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.fileupload">FileUpload</span>
                        </a>
                    </li>`;
        this.carouselComponent = `<li uiSrefActive="active" style="pointer-events: none;">
            <a class="dropdown-item" routerLink="carousel" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.carousel">Carousel</span>
            </a>
            </li>`;
        this.datatableComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="datatable" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.datatable">Datatable</span>
                        </a>
                    </li>`;
        this.tableComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="table" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.table">Table</span>
                        </a>
                    </li>`;
        this.datagridComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="datagrid" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.datagrid">Datagrid</span>
            </a>
            </li>`;
        this.orderlistComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="orderlist" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.orderlist">OrderList</span>
            </a>
            </li>`;
        this.datalistComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="datalist" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.datalist">DataList</span>
            </a>
            </li>`;
        this.dataviewComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="datalist" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.dataview">DataView</span>
            </a>
            </li>`;
        this.paginatorComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="paginator" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.paginator">Paginator</span>
            </a>
            </li>`;
        this.scheduleComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="schedule" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.schedule">Schedule</span>
            </a>
            </li>`;
        this.datascrollerComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="datascroller" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.datascroller">DataScroller</span>
            </a>
            </li>`;
        this.orgchartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="orgchart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.orgchart">OrgChart</span>
            </a>
            </li>`;
        this.gmapComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="gmap" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.gmap">Gmap</span>
            </a>
            </li>`;
        this.picklistComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="picklist" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.picklist">PickList</span>
            </a>
            </li>`;
        this.treeComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="tree" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.tree">Tree</span>
            </a>
            </li>`;
        this.treetableComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="treetable" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.treetable">TreeTable</span>
            </a>
            </li>`;
        this.accordionComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="accordion" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.accordion">Accordion</span>
            </a>
            </li>`;
        this.cardComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="card" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.card">Card</span>
            </a>
            </li>`;
        this.fieldsetComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="fieldset" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.fieldset">Fieldset</span>
            </a>
            </li>`;
        this.gridComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="grid" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.grid">grid</span>
            </a>
            </li>`;
        this.panelComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="panel" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.panel">Panel</span>
            </a>
            </li>`;
        this.scrollpanelComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="scrollpanel" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.scrollpanel">ScrollPanel</span>
            </a>
            </li>`;
        this.tabviewComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="tabview" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.tabview">TabView</span>
            </a>
            </li>`;
        this.toolbarComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="toolbar" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.toolbar">ToolBar</span>
            </a>
            </li>`;
        this.breadcrumbComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="breadcrumb" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.breadcrumb">Breadcrumb</span>
            </a>
            </li>`;
        this.contextmenuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="contextmenu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.contextmenu">Contextmenu</span>
            </a>
            </li>`;
        this.megamenuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="megamenu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.megamenu">Megamenu</span>
            </a>
            </li>`;
        this.menuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="menu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.menu">Menu</span>
            </a>
            </li>`;
        this.menubarComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="menubar" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.menubar">Menubar</span>
            </a>
            </li>`;
        this.panelmenuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="panelmenu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.panelmenu">Panelmenu</span>
            </a>
            </li>`;
        this.slidemenuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="slidemenu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.slidemenu">Slidemenu</span>
            </a>
            </li>`;
        this.stepsComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="steps" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.steps">Steps</span>
            </a>
            </li>`;
        this.tabmenuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="tabmenu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.tabmenu">Tabmenu</span>
            </a>
            </li>`;
        this.tieredmenuComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="tieredmenu" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.tieredmenu">Tieredmenu</span>
            </a>
            </li>`;
        this.confirmdialogComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="confirmdialog" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.confirmdialog">ConfirmDialog</span>
            </a>
            </li>`;
        this.dialogComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="dialog" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.dialog">Dialog</span>
            </a>
            </li>`;
        this.lightboxComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="lightbox" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.lightbox">Lightbox</span>
            </a>
            </li>`;
        this.overlaypanelComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="overlaypanel" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.overlaypanel">OverlayPanel</span>
            </a>
            </li>`;
        this.sidebarComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="sidebar" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.sidebar">SideBar</span>
            </a>
            </li>`;
        this.tooltipComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="tooltip" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.tooltip">Tooltip</span>
            </a>
            </li>`;
        this.dragdropComponent = `<li uiSrefActive="active">
                        <a class="dropdown-item" routerLink="dragdrop" routerLinkActive="active" (click)="collapseNavbar()">
                            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
                            <span jhiTranslate="global.menu.primeng.dragdrop">DragDrop</span>
                        </a>
                    </li>`;
        this.buttonComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="button" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.button">Button</span>
            </a>
            </li>`;
        this.splitbuttonComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="splitbutton" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.splitbutton">SplitButton</span>
            </a>
            </li>`;
        this.barchartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="barchart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.barchart">BarChart</span>
            </a>
            </li>`;
        this.doughnutchartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="doughnutchart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.doughnutchart">DoughnutChart</span>
            </a>
            </li>`;
        this.linechartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="linechart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.linechart">LineChart</span>
            </a>
            </li>`;
        this.piechartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="piechart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.piechart">PieChart</span>
            </a>
            </li>`;
        this.polarareachartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="polarareachart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.polarareachart">PolarAreaChart</span>
            </a>
            </li>`;
        this.radarchartComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="radarchart" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.radarchart">RadarChart</span>
            </a>
            </li>`;
        this.blockuiComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="blockui" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.blockui">BlockUI</span>
            </a>
            </li>`;
        this.captchaComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="captcha" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.captcha">Captcha</span>
            </a>
            </li>`;
        this.deferComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="defer" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.defer">Defer</span>
            </a>
            </li>`;
        this.inplaceComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="inplace" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.inplace">Inplace</span>
            </a>
            </li>`;
        this.progressbarComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="progressbar" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.progressbar">ProgressBar</span>
            </a>
            </li>`;
        this.rtlComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="rtl" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.rtl">RTL</span>
            </a>
            </li>`;
        this.terminalComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="terminal" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.terminal">Terminal</span>
            </a>
            </li>`;
        this.validationComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="validation" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.validation">Validation</span>
            </a>
            </li>`;
        this.progressspinnerComponent = `<li uiSrefActive="active">
            <a class="dropdown-item" routerLink="progressspinner" routerLinkActive="active" (click)="collapseNavbar()">
            <i class="fa fa-fw fa-circle-o" aria-hidden="true"></i>
            <span jhiTranslate="global.menu.primeng.progressspinner">Progress Spinner</span>
            </a>
            </li>`;


        this.inputComponents = `
                   <hr/>
                   <span style="font-weight:bold">Input Components</span>
                   <hr/> ${this.autocompleteComponent}${this.calendarComponent}${this.checkboxComponent}${this.chipsComponent}${this.colorpickerComponent}${this.editorComponent}${this.inputgroupComponent}${this.inputmaskComponent}${this.inputswitchComponent}${this.inputComponent}${this.inputtextareaComponent}${this.listboxComponent}${this.passwordindicatorComponent}${this.radiobuttonComponent}${this.ratingComponent}${this.selectComponent}${this.selectbuttonComponent}${this.sliderComponent}${this.spinnerComponent}${this.togglebuttonComponent}`;


        this.messageComponents = `
                   <hr/>
                   <span style="font-weight:bold">Messages Components</span>
                   <hr/> ${this.messageComponent}${this.growlComponent}${this.toastComponent}`;


        this.multimediaComponents = `
                   <hr/>
                    <span style="font-weight:bold">Multimedia Components</span>
                   <hr/>
                   ${this.galleriaComponent}`;

        this.fileuploadComponents = `
                   <hr/>
                    <span style="font-weight:bold">File Components</span>
                   <hr/>
                   ${this.fileuploadComponent}`;

        this.dataComponents = `
                   <hr/>
                   <span style="font-weight:bold">Data Components</span>
                   <hr/>
                    ${this.carouselComponent}${this.datagridComponent}${this.datalistComponent}${this.datascrollerComponent}${this.datatableComponent}${this.tableComponent}${this.gmapComponent}${this.orderlistComponent}${this.orgchartComponent}${this.paginatorComponent}${this.picklistComponent}${this.scheduleComponent}${this.treeComponent}${this.treetableComponent}`;
        this.dragdropComponents = `
                   <hr/>
                    <span style="font-weight:bold">Dragdrop Components</span>
                   <hr/>
                    ${this.dragdropComponent}`;

        this.menuComponents = `
            <hr/>
            <span style="font-weight:bold">Menu Components</span>
        <hr/>${this.breadcrumbComponent}${this.contextmenuComponent}${this.megamenuComponent}${this.menuComponent}${this.menubarComponent}${this.panelmenuComponent}${this.slidemenuComponent}${this.stepsComponent}${this.tabmenuComponent}${this.tieredmenuComponent}`;

        this.overlayComponents = `
                   <hr/>
                    <span style="font-weight:bold">Overlay Components</span>
                   <hr/>${this.confirmdialogComponent}${this.dialogComponent}${this.lightboxComponent}${this.overlaypanelComponent}${this.sidebarComponent}${this.tooltipComponent}`;
        this.panelComponents = `
                   <hr/>
                    <span style="font-weight:bold">Panel Components</span>
                   <hr/>${this.accordionComponent}${this.fieldsetComponent}${this.gridComponent}${this.panelComponent}${this.tabviewComponent}${this.toolbarComponent}${this.scrollpanelComponent}`;
        this.buttonComponents = `
                   <hr/>
                   <span style="font-weight:bold">Button Components</span>
                   <hr/>${this.buttonComponent}${this.splitbuttonComponent}`;
        this.chartComponents = `
                   <hr/>
                   <span style="font-weight:bold">Chart Components</span>
                   <hr/>${this.barchartComponent}${this.doughnutchartComponent}${this.linechartComponent}${this.piechartComponent}${this.polarareachartComponent}${this.radarchartComponent}`;
        this.miscComponents = `
                   <hr/>
                    <span style="font-weight:bold">Miscellaneous Components</span>
                   <hr/>${this.blockuiComponent}${this.captchaComponent}${this.deferComponent}${this.inplaceComponent}${this.progressbarComponent}${this.rtlComponent}${this.terminalComponent}${this.validationComponent}${this.progressspinnerComponent}`;
        if (this.categories) {
            this.componentGroups = (this.categories.indexOf('inputs') > -1 ? this.inputComponents : '') + (this.categories.indexOf('buttons') > -1 ? this.buttonComponents : '') + (this.categories.indexOf('data') > -1 ? this.dataComponents : '') +
                (this.categories.indexOf('panel') > -1 ? this.panelComponents : '') + (this.categories.indexOf('dragdrop') > -1 ? this.dragdropComponents : '') + (this.categories.indexOf('fileupload') > -1 ? this.fileuploadComponents : '') +
                (this.categories.indexOf('charts') > -1 ? this.chartComponents : '') + (this.categories.indexOf('menu') > -1 ? this.menuComponents : '') + (this.categories.indexOf('messages') > -1 ? this.messageComponents : '') +
                (this.categories.indexOf('overlay') > -1 ? this.overlayComponents : '') + (this.categories.indexOf('multimedia') > -1 ? this.multimediaComponents : '') + (this.categories.indexOf('misc') > -1 ? this.miscComponents : '');
        } else if (this.componentList) {
            this.componentGroups = (this.componentList.indexOf('autocomplete') > -1 ? this.autocompleteComponent : '') + (this.componentList.indexOf('calendar') > -1 ? this.calendarComponent : '') + (this.componentList.indexOf('checkbox') > -1 ? this.chipsComponent : '') + (this.componentList.indexOf('colorpicker') > -1 ? this.colorpickerComponent : '') +
                (this.componentList.indexOf('editor') > -1 ? this.editorComponent : '') + (this.componentList.indexOf('inputgroup') > -1 ? this.inputgroupComponent : '') + (this.componentList.indexOf('inputmask') > -1 ? this.inputmaskComponent : '') +
                (this.componentList.indexOf('inputswitch') > -1 ? this.inputswitchComponent : '') + (this.componentList.indexOf('inputtext') > -1 ? this.inputComponent : '') + (this.componentList.indexOf('inputtextarea') > -1 ? this.inputtextareaComponent : '') +
                (this.componentList.indexOf('keyfilter') > -1 ? this.keyfilterComponent : '') +
                (this.componentList.indexOf('listbox') > -1 ? this.listboxComponent : '') + (this.componentList.indexOf('passwordindicator') > -1 ? this.passwordindicatorComponent : '') + (this.componentList.indexOf('radiobutton') > -1 ? this.radiobuttonComponent : '') +
                (this.componentList.indexOf('rating') > -1 ? this.ratingComponent : '') + (this.componentList.indexOf('select') > -1 ? this.selectComponent : '') + (this.componentList.indexOf('selectbutton') > -1 ? this.selectbuttonComponent : '') +
                (this.componentList.indexOf('slider') > -1 ? this.sliderComponent : '') + (this.componentList.indexOf('spinner') > -1 ? this.spinnerComponent : '') + (this.componentList.indexOf('togglebutton') > -1 ? this.togglebuttonComponent : '') +
                (this.componentList.indexOf('button') > -1 ? this.buttonComponent : '') + (this.componentList.indexOf('splitbutton') > -1 ? this.splitbuttonComponent : '') + (this.componentList.indexOf('carousel') > -1 ? this.carouselComponent : '') +
                (this.componentList.indexOf('datagrid') > -1 ? this.datagridComponent : '') + (this.componentList.indexOf('datalist') > -1 ? this.datalistComponent : '') + (this.componentList.indexOf('datascroller') > -1 ? this.datascrollerComponent : '') +
                (this.componentList.indexOf('datatable') > -1 ? this.datatableComponent : '') + (this.componentList.indexOf('table') > -1 ? this.tableComponent : '') + (this.componentList.indexOf('dataview') > -1 ? this.dataviewComponent : '') + (this.componentList.indexOf('gmap') > -1 ? this.gmapComponent : '') + (this.componentList.indexOf('orderlist') > -1 ? this.orderlistComponent : '') + (this.componentList.indexOf('orgchart') > -1 ? this.orgchartComponent : '') +
                (this.componentList.indexOf('paginator') > -1 ? this.paginatorComponent : '') + (this.componentList.indexOf('picklist') > -1 ? this.picklistComponent : '') + (this.componentList.indexOf('schedule') > -1 ? this.scheduleComponent : '') +
                (this.componentList.indexOf('tree') > -1 ? this.treeComponent : '') + (this.componentList.indexOf('treetable') > -1 ? this.treetableComponent : '') + (this.componentList.indexOf('accordion') > -1 ? this.accordionComponent : '') + (this.componentList.indexOf('card') > -1 ? this.cardComponent : '') +
                (this.componentList.indexOf('fieldset') > -1 ? this.fieldsetComponent : '') + (this.componentList.indexOf('grid') > -1 ? this.gridComponent : '') + (this.componentList.indexOf('panel') > -1 ? this.panelComponent : '') + (this.componentList.indexOf('scrollpanel') > -1 ? this.scrollpanelComponent : '') +
                (this.componentList.indexOf('tabview') > -1 ? this.tabviewComponent : '') + (this.componentList.indexOf('toolbar') > -1 ? this.toolbarComponent : '') + (this.componentList.indexOf('confirmdialog') > -1 ? this.confirmdialogComponent : '') +
                (this.componentList.indexOf('dialog') > -1 ? this.dialogComponent : '') + (this.componentList.indexOf('lightbox') > -1 ? this.lightboxComponent : '') + (this.componentList.indexOf('overlaypanel') > -1 ? this.overlaypanelComponent : '') +
                (this.componentList.indexOf('sidebar') > -1 ? this.sidebarComponent : '') + (this.componentList.indexOf('tooltip') > -1 ? this.tooltipComponent : '') + (this.componentList.indexOf('fileupload') > -1 ? this.fileuploadComponent : '') +
                (this.componentList.indexOf('breadcrumb') > -1 ? this.breadcrumbComponent : '') + (this.componentList.indexOf('contextmenu') > -1 ? this.contextmenuComponent : '') +
                (this.componentList.indexOf('megamenu') > -1 ? this.megamenuComponent : '') + (this.componentList.indexOf('menu') > -1 ? this.menuComponent : '') + (this.componentList.indexOf('menubar') > -1 ? this.menubarComponent : '') +
                (this.componentList.indexOf('panelmenu') > -1 ? this.panelmenuComponent : '') + (this.componentList.indexOf('slidemenu') > -1 ? this.slidemenuComponent : '') + (this.componentList.indexOf('steps') > -1 ? this.stepsComponent : '') + (this.componentList.indexOf('tabmenu') > -1 ? this.tabmenuComponent : '') +
                (this.componentList.indexOf('tieredmenu') > -1 ? this.tieredmenuComponent : '') + (this.componentList.indexOf('barchart') > -1 ? this.barchartComponent : '') + (this.componentList.indexOf('doughnutchart') > -1 ? this.doughnutchartComponent : '') +
                (this.componentList.indexOf('linechart') > -1 ? this.linechartComponent : '') + (this.componentList.indexOf('piechart') > -1 ? this.piechartComponent : '') + (this.componentList.indexOf('polarareachart') > -1 ? this.polarareachartComponent : '') +
                (this.componentList.indexOf('radarchart') > -1 ? this.radarchartComponent : '') + (this.componentList.indexOf('growl') > -1 ? this.growlComponent : '') + (this.componentList.indexOf('messages') > -1 ? this.messageComponent : '') + (this.componentList.indexOf('toast') > -1 ? this.toastComponent : '')  +
                (this.componentList.indexOf('galleria') > -1 ? this.galleriaComponent : '') + (this.componentList.indexOf('dragdrop') > -1 ? this.dragdropComponent : '') + (this.componentList.indexOf('blockui') > -1 ? this.blockuiComponent : '') +
                (this.componentList.indexOf('captcha') > -1 ? this.captchaComponent : '') + (this.componentList.indexOf('defer') > -1 ? this.deferComponent : '') + (this.componentList.indexOf('inplace') > -1 ? this.inplaceComponent : '') +
                (this.componentList.indexOf('progressbar') > -1 ? this.progressbarComponent : '') + (this.componentList.indexOf('rtl') > -1 ? this.rtlComponent : '') + (this.componentList.indexOf('terminal') > -1 ? this.terminalComponent : '') +
                (this.componentList.indexOf('validation') > -1 ? this.validationComponent : '') + (this.componentList.indexOf('progressspinner') > -1 ? this.progressspinnerComponent : '');
        }
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
                <ul class="dropdown-menu" ngbDropdownMenu style="max-height:500px;overflow: scroll">
                      ${this.componentGroups}
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
                    ${this.componentGroups}
                </ul>
            </li>`;
            Object.keys(CONSTANTS.components).forEach((component) => {
                const label = `jhiTranslate="global.menu.primeng.${component}"`;
                primengMenu.replace(label, '');
            });
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
                    `${CLIENT_TEST_SRC_DIR}protractor.conf.js`,
                    'jhipster-needle-add-protractor-tests',
                    `${primengSpec}`);
            } catch (e) {
                this.log(`${chalk.red.bold('ERROR!')}`);
                this.log(`  Missing needle 'jhipster-needle-add-protractor-tests' in ${CLIENT_TEST_SRC_DIR}protractor.conf.js`);
                this.log('  You need to add manually in specs item:\n');
                this.log(`            ${primengSpec}`);
                this.log('');
                this.anyError = true;
            }
            this.template(`${CLIENT_TEST_SRC_DIR}e2e/primeng/_primeng.spec.ts`, `${CLIENT_TEST_SRC_DIR}e2e/primeng/primeng.spec.ts`);
        }

        // add quill to vendor
        try {
            this.rewriteFile(
                'src/main/webapp/app/vendor.ts',
                'jhipster-needle-add-element-to-vendor',
                'import \'quill/dist/quill.js\';\n import \'../../../../node_modules/fullcalendar/dist/fullcalendar.js\';');
        } catch (e) {
            this.log(`${chalk.red.bold('ERROR!')}`);
            this.log('  Missing needle \'jhipster-needle-add-element-to-vendor\' in src/main/webapp/app/vendor.ts');
            this.log('  You need to add manually:\n');
            this.log(`${chalk.yellow.bold('import \'quill/dist/quill.js\';')}`);
            this.log('');
            this.anyError = true;
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
            this.languages.forEach((language) => {
                this.template('src/main/webapp/i18n/en/primeng.json', `src/main/webapp/i18n/${language}/primeng.json`);
                try {
                    this.rewriteFile(
                        `src/main/webapp/i18n/${language}/global.json`,
                        'jhipster-needle-menu-add-element',
                        `${CONSTANTS.primengTranslation}`);
                } catch (e) {
                    this.log(`${chalk.red.bold('ERROR!')}`);
                    this.log(`  Missing needle 'jhipster-needle-menu-add-element' in src/main/webapp/i18n/${language}/global.json`);
                    this.log('  You need to add manually:');
                    this.log(`${CONSTANTS.primengTranslation}`);
                    this.log('');
                    this.anyError = true;
                }
            });
        }

        const _this = this;

        // copy all primeng files
        this.template('src/main/webapp/app/primeng/primeng.module.ts', 'src/main/webapp/app/primeng/primeng.module.ts');

        Object.keys(CONSTANTS.components).forEach((component) => {
            this.template(`src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/index.ts`, `src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/index.ts`);
            this.template(`src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.component.html`, `src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.component.html`);
            this.template(`src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.component.ts`, `src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.component.ts`);
            this.template(`src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.module.ts`, `src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.module.ts`);
            this.template(`src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.route.ts`, `src/main/webapp/app/primeng/${CONSTANTS.components[component]}/${component}/${component}demo.route.ts`);
        });


        Object.keys(DEMO_CONSTANTS.browserComponents).forEach((component) => {
            this.template(`src/main/webapp/app/primeng/${DEMO_CONSTANTS.browserComponents[component]}/${component}/service/browser.service.ts`, `src/main/webapp/app/primeng/${DEMO_CONSTANTS.browserComponents[component]}/${component}/service/browser.service.ts`);
            this.template(`src/main/webapp/app/primeng/${DEMO_CONSTANTS.browserComponents[component]}/${component}/service/browser.ts`, `src/main/webapp/app/primeng/${DEMO_CONSTANTS.browserComponents[component]}/${component}/service/browser.ts`);
        });

        this.template('src/main/webapp/app/primeng/data/datatable/service/mybrowser.ts', 'src/main/webapp/app/primeng/data/datatable/service/mybrowser.ts');
        this.template('src/main/webapp/app/primeng/misc/defer/service/mybrowser.ts', 'src/main/webapp/app/primeng/misc/defer/service/mybrowser.ts');
        this.template('src/main/webapp/app/primeng/misc/inplace/service/mybrowser.ts', 'src/main/webapp/app/primeng/misc/inplace/service/mybrowser.ts');
        this.template('src/main/webapp/app/primeng/data/table/service/mybrowser.ts', 'src/main/webapp/app/primeng/data/table/service/mybrowser.ts');

        Object.keys(DEMO_CONSTANTS.cityComponents).forEach((component) => {
            this.template(`src/main/webapp/app/primeng/${DEMO_CONSTANTS.cityComponents[component]}/${component}/service/treenode.service.ts`, `src/main/webapp/app/primeng/${DEMO_CONSTANTS.cityComponents[component]}/${component}/service/treenode.service.ts`);
        });

        this.template('src/main/webapp/app/primeng/data/schedule/event/event.ts', 'src/main/webapp/app/primeng/data/schedule/event/event.ts');
        this.template('src/main/webapp/app/primeng/data/schedule/service/event.service.ts', 'src/main/webapp/app/primeng/data/schedule/service/event.service.ts');
        this.template('src/main/webapp/app/primeng/data/orgchart/service/vcard.ts', 'src/main/webapp/app/primeng/data/orgchart/service/vcard.ts');
        this.template('src/main/webapp/app/primeng/data/orgchart/service/vcard.service.ts', 'src/main/webapp/app/primeng/data/orgchart/service/vcard.service.ts');
        this.template('src/main/webapp/app/primeng/menu/contextmenu/service/employee.ts', 'src/main/webapp/app/primeng/menu/contextmenu/service/employee.ts');
        this.template('src/main/webapp/app/primeng/menu/contextmenu/service/employee.service.ts', 'src/main/webapp/app/primeng/menu/contextmenu/service/employee.service.ts');
        this.template('src/main/webapp/app/primeng/dragdrop/dragdrop/service/document.ts', 'src/main/webapp/app/primeng/dragdrop/dragdrop/service/document.ts');
        this.template('src/main/webapp/app/primeng/dragdrop/dragdrop/service/document.service.ts', 'src/main/webapp/app/primeng/dragdrop/dragdrop/service/document.service.ts');
        this.copyImageFiles('src/main/webapp/assets/data/videos/ironman.mp4', 'src/main/webapp/content/primeng/assets/data/videos/ironman.mp4');
        this.template('src/main/webapp/app/primeng/overlay/overlaypanel/service/score.ts', 'src/main/webapp/app/primeng/overlay/overlaypanel/service/score.ts');
        this.template('src/main/webapp/app/primeng/overlay/overlaypanel/service/score.service.ts', 'src/main/webapp/app/primeng/overlay/overlaypanel/service/score.service.ts');

        this.template('src/main/webapp/app/primeng/menu/tabmenu/pages/downloads.component.html', 'src/main/webapp/app/primeng/menu/tabmenu/pages/downloads.component.html');
        this.template('src/main/webapp/app/primeng/menu/tabmenu/pages/downloads.component.ts', 'src/main/webapp/app/primeng/menu/tabmenu/pages/downloads.component.ts');
        this.template('src/main/webapp/app/primeng/menu/tabmenu/pages/overview.component.html', 'src/main/webapp/app/primeng/menu/tabmenu/pages/overview.component.html');
        this.template('src/main/webapp/app/primeng/menu/tabmenu/pages/overview.component.ts', 'src/main/webapp/app/primeng/menu/tabmenu/pages/overview.component.ts');



        Object.keys(DEMO_CONSTANTS.countryComponents).forEach((component) => {
            this.template(`src/main/webapp/app/primeng/${DEMO_CONSTANTS.countryComponents[component]}/${component}/service/country.ts`, `src/main/webapp/app/primeng/${DEMO_CONSTANTS.countryComponents[component]}/${component}/service/country.ts`);
            this.template(`src/main/webapp/app/primeng/${DEMO_CONSTANTS.countryComponents[component]}/${component}/service/country.service.ts`, `src/main/webapp/app/primeng/${DEMO_CONSTANTS.countryComponents[component]}/${component}/service/country.service.ts`);
        });
        this.template('src/main/webapp/assets/data/json/browsers/browsers.json', 'src/main/webapp/content/primeng/assets/data/json/browsers/browsers.json');
        this.copyImageFiles('src/main/webapp/assets/data/images/browsers/firefox.png', 'src/main/webapp/content/primeng/assets/data/images/browsers/firefox.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/browsers/ie.png', 'src/main/webapp/content/primeng/assets/data/images/browsers/ie.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/browsers/safari.png', 'src/main/webapp/content/primeng/assets/data/images/browsers/safari.png');
        this.template('src/main/webapp/assets/data/json/cities/cities.json', 'src/main/webapp/content/primeng/assets/data/json/cities/cities.json');
        this.template('src/main/webapp/assets/data/json/places/places.json', 'src/main/webapp/content/primeng/assets/data/json/places/places.json');
        this.template('src/main/webapp/assets/data/json/events/scheduleevents.json', 'src/main/webapp/content/primeng/assets/data/json/events/scheduleevents.json');
        this.copyImageFiles('src/main/webapp/assets/data/images/avatars/man.png', 'src/main/webapp/content/primeng/assets/data/images/avatars/man.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/avatars/women.png', 'src/main/webapp/content/primeng/assets/data/images/avatars/women.png');
        this.template('src/main/webapp/assets/data/json/vcards/vcards.json', 'src/main/webapp/content/primeng/assets/data/json/vcards/vcards.json');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/primefaces.png', 'src/main/webapp/content/primeng/assets/data/images/logos/primefaces.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/primeng.png', 'src/main/webapp/content/primeng/assets/data/images/logos/primeng.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/primereact.png', 'src/main/webapp/content/primeng/assets/data/images/logos/primereact.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/primeui.png', 'src/main/webapp/content/primeng/assets/data/images/logos/primeui.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/angularjs.png', 'src/main/webapp/content/primeng/assets/data/images/logos/angularjs.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/angular2.svg', 'src/main/webapp/content/primeng/assets/data/images/logos/angular2.svg');
        this.copyImageFiles('src/main/webapp/assets/data/images/logos/angular4.png', 'src/main/webapp/content/primeng/assets/data/images/logos/angular4.png');

        this.template('src/main/webapp/assets/data/json/employees/employees.json', 'src/main/webapp/content/primeng/assets/data/json/employees/employees.json');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Golf.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Golf.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Jetta.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Jetta.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Passat.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Passat.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Polo.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Polo.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Scirocco.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Scirocco.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Touareg.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Touareg.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/cars/Yeni.png', 'src/main/webapp/content/primeng/assets/data/images/cars/Yeni.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/dvi.png', 'src/main/webapp/content/primeng/assets/data/images/docs/dvi.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/mid.png', 'src/main/webapp/content/primeng/assets/data/images/docs/mid.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/mp3.png', 'src/main/webapp/content/primeng/assets/data/images/docs/mp3.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/perl.png', 'src/main/webapp/content/primeng/assets/data/images/docs/perl.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/ppt.png', 'src/main/webapp/content/primeng/assets/data/images/docs/ppt.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/swf.png', 'src/main/webapp/content/primeng/assets/data/images/docs/swf.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/wav.png', 'src/main/webapp/content/primeng/assets/data/images/docs/wav.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/xls.png', 'src/main/webapp/content/primeng/assets/data/images/docs/xls.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/docs/xml.png', 'src/main/webapp/content/primeng/assets/data/images/docs/xml.png');
        this.copyImageFiles('src/main/webapp/assets/data/images/loaders/loader.svg', 'src/main/webapp/content/primeng/assets/data/images/loaders/loader.svg');
        this.template('src/main/webapp/assets/data/json/documents/documents.json', 'src/main/webapp/content/primeng/assets/data/json/documents/documents.json');
        this.template('src/main/webapp/assets/data/json/scores/scores.json', 'src/main/webapp/content/primeng/assets/data/json/scores/scores.json');
        this.template('src/main/webapp/assets/data/json/countries/countries.json', 'src/main/webapp/content/primeng/assets/data/json/countries/countries.json');

        CONSTANTS.codes.forEach((code) => {
            _this.copyImageFiles(`src/main/webapp/assets/data/images/countries/${code}`, `src/main/webapp/content/primeng/assets/data/images/countries/${code}`);
        });
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
        } else if (this.clientPackageManager === 'yarn') {
            this.warning(`There is some problem. You need to resolve them, and launch ${chalk.yellow.bold('yarn install')}`);
        } else {
            this.warning(`There is some problem. You need to resolve them, and launch ${chalk.yellow.bold('npm install')}`);
        }
    },

    end() {
        this.log('End of primeng components generator');
    }
});
