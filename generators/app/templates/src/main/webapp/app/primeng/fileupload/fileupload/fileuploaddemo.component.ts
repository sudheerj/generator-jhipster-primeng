import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-fileupload',
    templateUrl: './fileuploaddemo.component.html',
    styles: []
})
export class FileUploadDemoComponent implements OnInit {

    activeIndex = 0;
    multiple = false;
    auto = false;
    msgs: Message[] = [];
    uploadMsgs: Message[] = [];
    uploadedFiles: any[] = [];

    ngOnInit() {}

    onBeforeSend(event: any) {
        (<XMLHttpRequest>event.xhr).setRequestHeader('jwt', 'xyz123');
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.uploadMsgs = [];
        this.uploadMsgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
