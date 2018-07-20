import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { FieldsetDemoComponent } from './fieldsetdemo.component';

export const fieldsetDemoRoute: Route = {
    path: 'fieldset',
    component: FieldsetDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.fieldset.title'
    },
    canActivate: [UserRouteAccessService]
};
