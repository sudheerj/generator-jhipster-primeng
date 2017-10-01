import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
