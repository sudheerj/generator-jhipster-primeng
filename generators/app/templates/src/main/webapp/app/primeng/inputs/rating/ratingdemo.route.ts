import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { RatingDemoComponent } from './ratingdemo.component';

export const ratingDemoRoute: Route = {
    path: 'rating',
    component: RatingDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.rating.title'
    },
    canActivate: [UserRouteAccessService]
};
