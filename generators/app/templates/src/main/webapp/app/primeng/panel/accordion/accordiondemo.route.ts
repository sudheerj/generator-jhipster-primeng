import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { AccordionDemoComponent } from './accordiondemo.component';

export const accordionDemoRoute: Route = {
    path: 'accordion',
    component: AccordionDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.accordion.title'
    },
    canActivate: [UserRouteAccessService]
};
