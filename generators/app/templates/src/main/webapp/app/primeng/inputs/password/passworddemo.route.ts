import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { PasswordDemoComponent } from './passworddemo.component';

export const passwordDemoRoute: Route = {
    path: 'password',
    component: PasswordDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.password.title'
    },
    canActivate: [UserRouteAccessService]
};
