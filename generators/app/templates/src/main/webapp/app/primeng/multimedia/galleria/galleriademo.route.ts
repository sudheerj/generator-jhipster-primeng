import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { GalleriaDemoComponent } from './galleriademo.component';

export const galleriaDemoRoute: Route = {
    path: 'galleria',
    component: GalleriaDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.messages.galleria.title'
    },
    canActivate: [UserRouteAccessService]
};
