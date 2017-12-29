import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-listbox',
    templateUrl: './listboxdemo.component.html',
    styles: []
})
export class ListboxDemoComponent implements OnInit {
    msgs: Message[] = [];

    cities: SelectItem[];

    selectedCity: string;

    selectedCities: string[];

    cars: SelectItem[];

    selectedCar = 'BMW';

    activeIndex = 0;

    constructor() {
        this.cities = [];
        this.cities.push({label: 'New York', value: 'New York'});
        this.cities.push({label: 'Rome', value: 'Rome'});
        this.cities.push({label: 'London', value: 'London'});
        this.cities.push({label: 'Istanbul', value: 'Istanbul'});
        this.cities.push({label: 'Paris', value: 'Paris'});

        this.cars = [];
        this.cars.push({label: 'Audi', value: 'Audi'});
        this.cars.push({label: 'BMW', value: 'BMW'});
        this.cars.push({label: 'Fiat', value: 'Fiat'});
        this.cars.push({label: 'Ford', value: 'Ford'});
        this.cars.push({label: 'Honda', value: 'Honda'});
        this.cars.push({label: 'Jaguar', value: 'Jaguar'});
        this.cars.push({label: 'Mercedes', value: 'Mercedes'});
        this.cars.push({label: 'Renault', value: 'Renault'});
        this.cars.push({label: 'VW', value: 'VW'});
        this.cars.push({label: 'Volvo', value: 'Volvo'});
    }

    ngOnInit() {

    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
