import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {DocumentService} from './service/document.service';
import {Document} from './service/document';
import {MessageService} from 'primeng/api';
import {BrowserService} from "../../data/virtualscroller/service/browser.service";

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
    }

    ngOnInit() {
        this.seletedDocs = [];
        this.docService.getDocuments().subscribe((docs: any) => this.availableDocs = docs.data);
    }

    dragStart(event: any, doc: Document) {
        this.draggedDoc = doc;
    }

    drop(event: any) {
        if (this.draggedDoc) {
            // add draggable element to the deleted documents list
            this.seletedDocs = [...this.seletedDocs, this.draggedDoc];
            // remove draggable element from the available documents list
            this.availableDocs = this.availableDocs.filter((e: Document) => e.id !== this.draggedDoc.id);
            this.draggedDoc = null;
        }
    }

    dragEnd(event: any) {
        this.draggedDoc = null;
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
