import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { ButtonDemoComponent } from './buttondemo.component';

export const buttonDemoRoute: Route = {
    path: 'button',
    component: ButtonDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.buttons.button.title'
    },
    canActivate: [UserRouteAccessService]
};
