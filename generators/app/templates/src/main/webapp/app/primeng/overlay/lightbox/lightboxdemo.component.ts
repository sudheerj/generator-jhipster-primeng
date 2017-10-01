import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-lightbox',
    templateUrl: './lightboxdemo.component.html',
    styles: []
})
export class LightboxDemoComponent implements OnInit {
    images: any[];
    msgs: Message[] = [];
    activeIndex: number = 0;

    ngOnInit() {
        this.images = [];
        this.images.push({source: '/assets/data/images/primefaces.png',
            thumbnail: '/assets/data/images/primefaces.png', title: 'PrimeFaces'});
        this.images.push({source: '/assets/data/images/primeng.png',
            thumbnail: '/assets/data/images/primeng.png', title: 'PrimeNG'});
        this.images.push({source: '/assets/data/images/primereact.png',
            thumbnail: '/assets/data/images/primereact.png', title: 'PrimeReact'});
        this.images.push({source: '/assets/data/images/primeui.png',
            thumbnail: '/assets/data/images/primeui.png', title: 'PrimeUI'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
