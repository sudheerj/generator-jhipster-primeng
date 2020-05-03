import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

declare const google: any;

@Component({
    selector: 'jhi-gmap',
    templateUrl: './gmapdemo.component.html',
    styles: []
})
export class GmapDemoComponent implements OnInit {
    options: any;

    overlays: any[];

    overlaysEvents: any[];

    dialogVisible: boolean;

    markerTitle: string;

    map: any;

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.options = {};
        this.overlays = [];
        this.overlaysEvents = [];
        this.dialogVisible = false;
        this.markerTitle = '';
        this.map = {};
        this.selectedPosition = null;
        this.infoWindow = {};
        this.draggable = false;
    }

    ngOnInit(): void {
        this.options = {
            center: {lat: 14.4426, lng: 79.9865},
            zoom: 8
        };

        this.initOverlays();

        this.infoWindow = new google.maps.InfoWindow();
    }

    handleMapReady(event: any): void {
        this.map = event.map;
        this.messageService.add({severity: 'info', summary: 'Map is ready', detail: 'Map is loaded'});
    }

    handleMapClick(event: any): void {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
        this.messageService.add({severity: 'info', summary: 'Map is clicked', detail: this.selectedPosition});
    }

    handleOverlayClick(event: any): void {
        const isMarker = event.overlay.getTitle !== undefined;

        if (isMarker) {
            const title = event.overlay.getTitle();
            this.infoWindow.setContent('' + title + '');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            this.messageService.add({severity: 'info', summary: 'Marker Selected', detail: title});
        } else {
            this.messageService.add({severity: 'info', summary: 'Shape Selected', detail: ''});
        }
    }

    handleZoomChanged(event: any): void {
        this.messageService.add({severity: 'info', summary: 'The map zoom options are changed', detail: event});
    }

    handleMapDragEnd(event: any): void {
        this.messageService.add({severity: 'info', summary: 'The map drag is reached end', detail: event});
    }

    addMarker(): void {
        this.overlaysEvents.push(new google.maps.Marker({position: {lat: this.selectedPosition.lat(),
            lng: this.selectedPosition.lng()}, title: this.markerTitle, draggable: this.draggable}));
        this.markerTitle = '';
        this.dialogVisible = false;
    }

    handleDragStart(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Marker Drag started', detail: event.overlay.getTitle()});
    }

    handleDragEnd(event: any): void {
        this.messageService.add({severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle()});
    }

    initOverlays(): void {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({position: {lat: 14.6188043, lng: 79.9630253}, title: 'Talamanchi'}),
                new google.maps.Marker({position: {lat: 14.4290442, lng: 79.9456852}, title: 'Nellore'}),
                new google.maps.Polygon({paths: [
                    {lat: 14.1413809, lng: 79.8254154}, {lat: 11.1513809, lng: 78.8354154},
                    {lat: 15.1313809, lng: 78.8254154}, {lat: 15.1613809, lng: 79.8854154}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 14.1413809, lng: 79.9513809},
                    fillColor: '#197642', fillOpacity: 0.25, strokeWeight: 1, radius: 25000}),
                new google.maps.Polyline({path: [{lat: 14.1413809, lng: 79.9254154},
                    {lat: 14.6413809, lng: 79.9254154}], geodesic: true, strokeColor: '#F0F000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }

        if (!this.overlaysEvents || !this.overlaysEvents.length) {
            this.overlaysEvents = [
                new google.maps.Marker({position: {lat: 14.6188043, lng: 79.9630253}, title: 'Talamanchi'}),
                new google.maps.Marker({position: {lat: 14.4290442, lng: 79.9456852}, title: 'Nellore'}),
                new google.maps.Polygon({paths: [
                    {lat: 14.1413809, lng: 79.8254154}, {lat: 11.1513809, lng: 78.8354154},
                    {lat: 15.1313809, lng: 78.8254154}, {lat: 15.1613809, lng: 79.8854154}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 14.1413809, lng: 79.9513809},
                    fillColor: '#197642', fillOpacity: 0.25, strokeWeight: 1, radius: 25000}),
                new google.maps.Polyline({path: [{lat: 14.1413809, lng: 79.9254154},
                    {lat: 14.6413809, lng: 79.9254154}], geodesic: true, strokeColor: '#F0F000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }
    }

    zoomIn(map: any): void {
        map.setZoom(map.getZoom() + 1);
    }

    zoomOut(map: any): void {
        map.setZoom(map.getZoom() - 1);
    }

    clear(): void {
        this.overlaysEvents = [];
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
