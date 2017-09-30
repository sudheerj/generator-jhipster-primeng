import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { FileUploadDemoComponent } from './fileuploaddemo.component';

export const fileuploadDemoRoute: Route = {
    path: 'fileupload',
    component: FileUploadDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.file.fileupload.title'
    },
    canActivate: [UserRouteAccessService]
};
