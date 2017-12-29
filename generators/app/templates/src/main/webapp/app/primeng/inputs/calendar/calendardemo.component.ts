import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

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
    de: any;
    types: SelectItem[];
    selectedHourFormat = '12';
    msgs: Message[] = [];
    activeIndex = 0;

    onSelect() {
        this.msgs.push({severity: 'info', summary: 'The calendar date is selected'});
    }

    onBlur() {
        this.msgs.push({severity: 'info', summary: 'Calendar lost the focus'});
    }

    onFocus() {
        this.msgs.push({severity: 'info', summary: 'Calendar got the focus'});
    }

    onClear() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The Calendar is closed'});
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

    ngOnInit() {
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

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
