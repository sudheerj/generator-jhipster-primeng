import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'jhi-autocomplete',
    templateUrl: './autocompletedemo.component.html',
    styles: []
})
export class AutocompleteDemoComponent implements OnInit {
    country: Country;
    countries: Country[];
    topcountry: string;
    topcountrySingle: string;
    topAsianCountry: string;
    countryInstance: Country;
    customCountry: Country;
    topAsiaCountries: string[];
    filteredCountries: Country[];
    filteredCountriesMultiple: Country[];
    filteredTopAsiaCountries: any[];
    filteredCountryInstances: Country[];
    filteredCustomCountries: Country[];
    selectedType = 'readonly';
    types: SelectItem[];
    activeIndex = 0;

    constructor(private countryService: CountryService, private messageService: MessageService) {
        this.country = {} as Country;
        this.countries = [];
        this.topcountry = '';
        this.topcountrySingle = '';
        this.topAsianCountry = '';
        this.countryInstance = {} as Country;
        this.customCountry = {} as Country;
        this.topAsiaCountries = ['Singapore', 'Hong Kong', 'South Korea', 'Japan', 'Israel',
            'Brunei', 'Qatar', 'Cyprus', 'Saudi Arabia', 'United Arab Emirates'];
        this.filteredCountries = [];
        this.filteredCountriesMultiple = [];
        this.filteredCustomCountries = [];
        this.filteredTopAsiaCountries = [];
        this.filteredCountryInstances = [];
        this.filteredCustomCountries = [];
        this.selectedType = '';
        this.types = [];
    }

    onFocus(): void {
        this.messageService.add({severity: 'info', summary: 'The autocomplete gets focus'});
    }

    onBlur(): void {
        this.messageService.add({severity: 'info', summary: 'The autocomplete loses focus'});
    }

    onSelect(): void {
        this.messageService.add({severity: 'info', summary: 'The autocomplete suggestion is selected'});
    }

    onUnselect(): void {
        this.messageService.add({severity: 'info', summary: 'The autocomplete selected item is removed'});
    }

    onClearInput(): void {
        this.messageService.add({severity: 'info', summary: 'The autocomplete input is cleared'});
    }

    filterCountryInstances(event: any): void {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: any) => {
            this.filteredCountryInstances = this.filterCountry(query, countries.data);
        });
    }

    filterCountries(event: any): void {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: any) => {
            this.filteredCountries = this.filterCountry(query, countries.data);
        });
    }

    filterCountriesMultiple(event: any): void {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: any) => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries.data);
        });
    }

    filterCustomCountries(event: any): void {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: any) => {
            this.filteredCustomCountries = this.filterCountry(query, countries.data);
        });
    }

    filterTopAsiaCountries(event: any): void {
        this.filteredTopAsiaCountries = [];
        for (const country of this.topAsiaCountries) {
            if (country.toLowerCase().startsWith(event.query.toLowerCase())) {
                this.filteredTopAsiaCountries.push(country);
            }
        }
    }

    handleDropdownClick(): void {
        this.filteredTopAsiaCountries = [];
        setTimeout(() => {
            this.filteredTopAsiaCountries = this.topAsiaCountries;
        }, 100);
    }

    filterCountry(query: string, countries: Country[]): Country[] {
        const filtered: any[] = [];
        for (const country of countries) {
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    ngOnInit(): void {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
