import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { MessagesDemoComponent } from './messagesdemo.component';

export const messagesDemoRoute: Route = {
    path: 'messages',
    component: MessagesDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.messages.messages.title'
    },
    canActivate: [UserRouteAccessService]
};
