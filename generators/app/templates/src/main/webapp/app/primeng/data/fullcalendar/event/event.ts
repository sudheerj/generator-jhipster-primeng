export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay = true;

    constructor() {
        this.id = 0;
        this.title = '';
        this.start = '';
        this.end = '';
        this.allDay = false
    }
}
