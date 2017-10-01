import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { CaptchaDemoComponent } from './captchademo.component';

export const captchaDemoRoute: Route = {
    path: 'captcha',
    component: CaptchaDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.captcha.title'
    },
    canActivate: [UserRouteAccessService]
};
