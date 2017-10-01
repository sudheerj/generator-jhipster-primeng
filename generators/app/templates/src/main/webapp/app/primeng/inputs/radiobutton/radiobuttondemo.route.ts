import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { RadioButtonDemoComponent } from './radiobuttondemo.component';

export const radiobuttonDemoRoute: Route = {
    path: 'radiobutton',
    component: RadioButtonDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.radiobutton.title'
    },
    canActivate: [UserRouteAccessService]
};
