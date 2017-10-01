import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { FielsetDemoComponent } from './fieldsetdemo.component';

export const fieldsetDemoRoute: Route = {
    path: 'fieldset',
    component: FielsetDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.fieldset.title'
    },
    canActivate: [UserRouteAccessService]
};
