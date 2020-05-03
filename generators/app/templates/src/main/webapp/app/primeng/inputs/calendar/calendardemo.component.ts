import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-calendar',
    templateUrl: './calendardemo.component.html',
    styles: []
})
export class CalendarDemoComponent implements OnInit {
    basicDateInput: Date;
    localizedDateInput: Date;
    advancedDateInput: Date;
    timeDateInput: Date;
    inlineDateInput: Date;
    iconDateInput: Date;
    navigatorDateInput: Date;
    minmaxDateInput: Date;
    disabeDaysDateInput: Date;
    eventsDateInput: Date;
    readonlyDateInput: Date;
    disableDateInput: Date;
    invalidDates: Date[];
    minDate: Date;
    maxDate: Date;
    time: boolean;
    de: object;
    types: SelectItem[];
    selectedHourFormat: string;
    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.basicDateInput = new Date();
        this.localizedDateInput = new Date();
        this.advancedDateInput = new Date();
        this.timeDateInput = new Date();
        this.inlineDateInput = new Date();
        this.iconDateInput = new Date();
        this.navigatorDateInput = new Date();
        this.minmaxDateInput = new Date();
        this.disabeDaysDateInput = new Date();
        this.eventsDateInput = new Date();
        this.readonlyDateInput = new Date();
        this.disabeDaysDateInput = new Date();
        this.disableDateInput = new Date();
        this.invalidDates = [];
        this.minDate = new Date();
        this.maxDate = new Date();
        this.time = false;
        this.de = {} as object;
        this.types = [];
        this.selectedHourFormat = '12';
    }

    onSelect(): void {
        this.messageService.add({severity: 'info', summary: 'The calendar date is selected'});
    }

    onBlur(): void {
        this.messageService.add({severity: 'info', summary: 'Calendar lost the focus'});
    }

    onFocus(): void {
        this.messageService.add({severity: 'info', summary: 'Calendar got the focus'});
    }

    onClose(): void {
        this.messageService.add({severity: 'info', summary: 'The Calendar is closed'});
    }

    set hourFormat(hourFormat: string) {
        this.selectedHourFormat = hourFormat;
        if (this.timeDateInput) {
            this.timeDateInput = new Date(this.timeDateInput.getTime());
        }
    }

    get hourFormat(): string {
        return this.selectedHourFormat;
    }

    ngOnInit(): void {
        this.de = {
            firstDayOfWeek: 1,
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
            dayNamesMin: ['S', 'M', 'D', 'M ', 'D', 'F ', 'S'],
            monthNames: [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
                'August', 'September', 'Oktober', 'November', 'Dezember'
            ],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
        };

        this.types = [];
        this.types.push({label: '12H Format', value: '12'});
        this.types.push({label: '24H Format', value: '24'});

        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const prevMonth = (month === 0) ? 11 : month - 1;
        const prevYear = (prevMonth === 11) ? year - 1 : year;
        const nextMonth = (month === 11) ? 0 : month + 1;
        const nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        const invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 3);
        this.invalidDates = [today, invalidDate];

    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
