import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem,Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-fileupload',
    templateUrl: './fileuploaddemo.component.html',
    styles: []
})
export class FileUploadDemoComponent implements OnInit {
    activeIndex: number = 0;

    ngOnInit(){

    }

    multiple: boolean = false;
    auto: boolean = false;
    msgs: Message[] = [];
    uploadMsgs: Message[] = [];
    uploadedFiles: any[] = [];

    onBeforeSend(event: any) {
        (<XMLHttpRequest>event.xhr).setRequestHeader('jwt', 'xyz123');
    }

    onUpload(event: any) {
        for (let file of event.files) {
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
