import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { InputTextDemoComponent } from './inputtextdemo.component';

export const inputTextDemoRoute: Route = {
    path: 'inputtext',
    component: InputTextDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.inputtext.title'
    },
    canActivate: [UserRouteAccessService]
};
