import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { InputSwitchDemoComponent } from './inputswitchdemo.component';

export const inputswitchDemoRoute: Route = {
    path: 'inputswitch',
    component: InputSwitchDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.inputswitch.title'
    },
    canActivate: [UserRouteAccessService]
};
