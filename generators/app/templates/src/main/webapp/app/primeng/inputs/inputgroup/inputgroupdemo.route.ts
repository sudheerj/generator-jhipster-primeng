import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { InputGroupDemoComponent } from './inputgroupdemo.component';

export const inputGroupDemoRoute: Route = {
    path: 'inputgroup',
    component: InputGroupDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.inputgroup.title'
    },
    canActivate: [UserRouteAccessService]
};
