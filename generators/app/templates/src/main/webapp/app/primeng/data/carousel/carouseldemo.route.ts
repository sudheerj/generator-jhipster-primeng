import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { CarouselDemoComponent } from './carouseldemo.component';

export const carouselDemoRoute: Route = {
    path: 'carousel',
    component: CarouselDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.carousel.title'
    },
    canActivate: [UserRouteAccessService]
};
