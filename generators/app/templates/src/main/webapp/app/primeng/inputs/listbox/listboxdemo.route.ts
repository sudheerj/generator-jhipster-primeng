import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { ListboxDemoComponent } from './listboxdemo.component';

export const listboxDemoRoute: Route = {
    path: 'listbox',
    component: ListboxDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.listbox.title'
    },
    canActivate: [UserRouteAccessService]
};
