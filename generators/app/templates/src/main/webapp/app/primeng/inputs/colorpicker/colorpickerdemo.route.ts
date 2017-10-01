import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { ColorpickerDemoComponent } from './colorpickerdemo.component';

export const colorpickerDemoRoute: Route = {
    path: 'colorpicker',
    component: ColorpickerDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.colorpicker.title'
    },
    canActivate: [UserRouteAccessService]
};
