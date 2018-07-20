import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { InputMaskDemoComponent } from './inputmaskdemo.component';

export const inputmaskDemoRoute: Route = {
    path: 'inputmask',
    component: InputMaskDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.inputmask.title'
    },
    canActivate: [UserRouteAccessService]
};
