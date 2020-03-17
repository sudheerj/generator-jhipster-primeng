import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';
import {DocumentService} from "../../dragdrop/dragdrop/service/document.service";

@Component({
    selector: 'jhi-fileupload',
    templateUrl: './fileuploaddemo.component.html',
    styles: []
})
export class FileUploadDemoComponent implements OnInit {

    activeIndex = 0;
    multiple: boolean;
    auto: boolean;
    uploadedFiles: any[];

    ngOnInit() {}

    constructor(private messageService: MessageService) {
        this.multiple = false;
        this.auto = false;
        this.uploadedFiles = [];
    }

    onBeforeSend(event: any) {
        (<XMLHttpRequest>event.xhr).setRequestHeader('jwt', 'xyz123');
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
