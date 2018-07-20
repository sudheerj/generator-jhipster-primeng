import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { AutocompleteDemoComponent } from './autocompletedemo.component';

export const autocompleteDemoRoute: Route = {
    path: 'autocomplete',
    component: AutocompleteDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.autocomplete.title'
    },
    canActivate: [UserRouteAccessService]
};
