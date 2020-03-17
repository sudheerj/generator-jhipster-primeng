import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'jhi-orderlist',
    templateUrl: './orderlistdemo.component.html',
    styles: []
})
export class OrderlistDemoComponent implements OnInit {
    activeIndex = 0;

    countries: Country[];

    constructor(private countryService: CountryService, private messageService: MessageService) {
        this.countries = [];
    }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countries: any) => {
            this.countries = countries.data;
        });
    }

    onReorder(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'onReorder Event', detail: event.items});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
