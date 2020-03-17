import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-galleria',
    templateUrl: './galleriademo.component.html',
    styles: []
})
export class GalleriaDemoComponent implements OnInit {
    activeIndex = 0;

    images: any[];

    ngOnInit() {
        this.images = [];
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Yeni.png',
            alt: 'This is a first car',
            title: 'Yeni Vollkswagen CC'
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Golf.png',
            alt: 'This is a second car',
            title: 'Golf'
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Jetta.png',
            alt: 'This is a third car',
            title: 'Jetta'
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Passat.png',
            alt: 'This is a fourth car',
            title: 'Passat'
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Polo.png',
            alt: 'This is a fifth car',
            title: 'Polo'
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Scirocco.png',
            alt: 'This is a sixth car',
            title: 'Scirocco'
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Touareg.png',
            alt: 'This is a seventh car',
            title: 'Touareg'
        });
    }

    onImageClicked($event: any) {
        window.open($event.image.source, '_blank');
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    constructor(private messageService: MessageService) {
        this.images = [];
    }
}
