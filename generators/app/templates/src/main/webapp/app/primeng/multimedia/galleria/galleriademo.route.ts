import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { GalleriaDemoComponent } from './galleriademo.component';

export const galleriaDemoRoute: Route = {
    path: 'growl',
    component: GalleriaDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.messages.galleria.title'
    },
    canActivate: [UserRouteAccessService]
};
