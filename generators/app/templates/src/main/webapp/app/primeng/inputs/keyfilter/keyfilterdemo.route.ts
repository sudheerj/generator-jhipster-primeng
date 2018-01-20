import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { KeyFilterDemoComponent } from './keyfilterdemo.component';

export const keyFilterDemoRoute: Route = {
    path: 'keyfilter',
    component: KeyFilterDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.keyfilter.title'
    },
    canActivate: [UserRouteAccessService]
};
