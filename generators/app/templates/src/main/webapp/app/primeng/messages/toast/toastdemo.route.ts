import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { ToastDemoComponent } from './toastdemo.component';

export const toastDemoRoute: Route = {
    path: 'toast',
    component: ToastDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.messages.toast.title'
    },
    canActivate: [UserRouteAccessService]
};
