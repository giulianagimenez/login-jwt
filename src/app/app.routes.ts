import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { authenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children:[
      {
        path:'dashboard',
        loadComponent: ()=> import('./business/dashboard/dashboard.component'),
        // canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: ()=>import('./private/auth/login/login.component'),
    canActivate: [authenticatedGuard]
  },
  {
    path:'**',
    redirectTo: 'dashboard'
  }
];
