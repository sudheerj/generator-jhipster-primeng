import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
