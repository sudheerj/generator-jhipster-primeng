import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { CardDemoComponent } from './carddemo.component';

export const cardDemoRoute: Route = {
    path: 'card',
    component: CardDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.card.title'
    },
    canActivate: [UserRouteAccessService]
};
