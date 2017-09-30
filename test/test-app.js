/* global describe, beforeEach, it*/

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const deps = [
    [helpers.createDummyGenerator(), 'jhipster:modules']
];

const expectedFiles = {
    primeng: [
        'src/main/webapp/app/primeng/primeng.module.ts',

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

        'src/main/webapp/app/primeng/buttons/button/index.ts',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.component.html',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.component.ts',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.module.ts',
        'src/main/webapp/app/primeng/buttons/button/buttondemo.route.ts',

        'src/main/webapp/app/primeng/buttons/splitbutton/index.ts',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.html',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.component.ts',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.module.ts',
        'src/main/webapp/app/primeng/buttons/splitbutton/splitbuttondemo.route.ts'
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
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
                    testmode: true
                })
                .withPrompts({
                    confirmation: true
                })
                .withGenerators(deps)
                .on('end', done);
        });

        it('generate all primeng files', () => {
            assert.file(expectedFiles.primeng);
            assert.noFile(expectedFiles.translation);
            assert.file(expectedFiles.protractor);
        });
    });
});
