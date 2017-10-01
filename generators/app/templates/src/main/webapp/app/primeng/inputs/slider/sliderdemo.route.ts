import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { SliderDemoComponent } from './sliderdemo.component';

export const sliderDemoRoute: Route = {
    path: 'slider',
    component: SliderDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.slider.title'
    },
    canActivate: [UserRouteAccessService]
};
