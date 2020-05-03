import { Component, OnInit } from '@angular/core';
import {DocumentService} from './service/document.service';
import {Document} from './service/document';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-dragdrop',
    templateUrl: './dragdropdemo.component.html',
    styles: [`
        :host ::ng-deep .drag-column {
            padding-right: .5em;
        }

        :host ::ng-deep .drop-column {
            border: 1px solid #c8c8c8;
            background-color: #ffffff;
        }

        .ui-g li {
            list-style-type: none;
            padding: 10px;
            margin-bottom: 5px;
            border: 1px solid #c8c8c8;
            background-color: #ffffff;
        }
    `]
})
export class DragdropDemoComponent implements OnInit {
    activeIndex = 0;
    availableDocs: Document[];
    seletedDocs: Document[];
    draggedDoc: Document;

    constructor(private docService: DocumentService, private messageService: MessageService) {
        this.availableDocs = [];
        this.seletedDocs = [];
        this.draggedDoc = {} as Document;
    }

    ngOnInit(): void {
        this.seletedDocs = [];
        this.docService.getDocuments().subscribe((docs: any) => this.availableDocs = docs.data);
    }

    dragStart(event: any, doc: Document): void {
        this.draggedDoc = doc;
        this.messageService.add({severity: 'info', summary: event});
    }

    drop(event: any): void {
        if (this.draggedDoc) {
            // add draggable element to the deleted documents list
            this.seletedDocs = [...this.seletedDocs, this.draggedDoc];
            // remove draggable element from the available documents list
            this.availableDocs = this.availableDocs.filter((e: Document) => e.id !== this.draggedDoc.id);
            this.draggedDoc = {} as Document;
        }
        this.messageService.add({severity: 'info', summary: event});
    }

    dragEnd(event: any): void {
        this.draggedDoc = {} as Document;
        this.messageService.add({severity: 'info', summary: event});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
