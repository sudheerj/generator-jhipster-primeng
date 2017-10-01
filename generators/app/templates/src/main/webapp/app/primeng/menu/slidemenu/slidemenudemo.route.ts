import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { SlideMenuDemoComponent } from './slidemenudemo.component';

export const slidemenuDemoRoute: Route = {
    path: 'slidemenu',
    component: SlideMenuDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.slidemenu.title'
    },
    canActivate: [UserRouteAccessService]
};
