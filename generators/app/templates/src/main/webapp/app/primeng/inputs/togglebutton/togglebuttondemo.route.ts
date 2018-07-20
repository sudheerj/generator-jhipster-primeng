import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { ToggleButtonDemoComponent } from './togglebuttondemo.component';

export const spinnerDemoRoute: Route = {
    path: 'togglebutton',
    component: ToggleButtonDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.togglebutton.title'
    },
    canActivate: [UserRouteAccessService]
};
