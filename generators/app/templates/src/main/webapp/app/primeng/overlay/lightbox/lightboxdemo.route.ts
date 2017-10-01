import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { LightboxDemoComponent } from './lightboxdemo.component';

export const lightboxDemoRoute: Route = {
    path: 'lightbox',
    component: LightboxDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.overlay.lightbox.title'
    },
    canActivate: [UserRouteAccessService]
};
