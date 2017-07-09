/* global describe, beforeEach, it*/

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const deps = [
    [helpers.createDummyGenerator(), 'jhipster:modules']
];

const expectedFiles = {
    dashboard: [
        'src/main/webapp/app/dashboard/dashboard.module.ts',

        'src/main/webapp/app/dashboard/charts/barchart/index.ts',
        'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.component.html',
        'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.component.ts',
        'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.module.ts',
        'src/main/webapp/app/dashboard/charts/barchart/barchartdemo.route.ts',

        'src/main/webapp/app/dashboard/charts/doughnutchart/index.ts',
        'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.component.html',
        'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.component.ts',
        'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.module.ts',
        'src/main/webapp/app/dashboard/charts/doughnutchart/doughnutchartdemo.route.ts',

        'src/main/webapp/app/dashboard/charts/linechart/index.ts',
        'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.component.html',
        'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.component.ts',
        'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.module.ts',
        'src/main/webapp/app/dashboard/charts/linechart/linechartdemo.route.ts',

        'src/main/webapp/app/dashboard/charts/piechart/index.ts',
        'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.component.html',
        'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.component.ts',
        'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.module.ts',
        'src/main/webapp/app/dashboard/charts/piechart/piechartdemo.route.ts',

        'src/main/webapp/app/dashboard/charts/polarareachart/index.ts',
        'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.component.html',
        'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.component.ts',
        'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.module.ts',
        'src/main/webapp/app/dashboard/charts/polarareachart/polarareachartdemo.route.ts',

        'src/main/webapp/app/dashboard/charts/radarchart/index.ts',
        'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.component.html',
        'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.component.ts',
        'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.module.ts',
        'src/main/webapp/app/dashboard/charts/radarchart/radarchartdemo.route.ts',

        'src/main/webapp/app/dashboard/buttons/button/index.ts',
        'src/main/webapp/app/dashboard/buttons/button/buttondemo.component.html',
        'src/main/webapp/app/dashboard/buttons/button/buttondemo.component.ts',
        'src/main/webapp/app/dashboard/buttons/button/buttondemo.module.ts',
        'src/main/webapp/app/dashboard/buttons/button/buttondemo.route.ts',

        'src/main/webapp/app/dashboard/buttons/splitbutton/index.ts',
        'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.component.html',
        'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.component.ts',
        'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.module.ts',
        'src/main/webapp/app/dashboard/buttons/splitbutton/splitbuttondemo.route.ts'
    ],
    translation: [
        'src/main/webapp/i18n/en/dashboard.json',
        'src/main/webapp/i18n/fr/dashboard.json'
    ],
    protractor: [
        'src/test/javascript/e2e/dashboard/dashboard.spec.ts'
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
                .on('end', done);
        });

        it('generate all dashboard files', () => {
            assert.file(expectedFiles.dashboard);
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
                .on('end', done);
        });

        it('generate all dashboard files', () => {
            assert.file(expectedFiles.dashboard);
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
                .on('end', done);
        });

        it('generate all dashboard files', () => {
            assert.file(expectedFiles.dashboard);
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
                .on('end', done);
        });

        it('generate all dashboard files', () => {
            assert.file(expectedFiles.dashboard);
            assert.noFile(expectedFiles.translation);
            assert.file(expectedFiles.protractor);
        });
    });
});
