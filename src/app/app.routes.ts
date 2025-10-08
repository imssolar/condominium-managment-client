import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { PackagesCreateComponent } from './packages/create/create';
import { PackagesHistoryComponent } from './packages/history/history';
import { PackagesDetailComponent } from './packages/detail/detail';
import { PackagesPendingComponent } from './packages/pending/pending';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'packages', pathMatch: 'full' },
      {
        path: 'packages',
        children: [
          { path: '', redirectTo: 'pending', pathMatch: 'full' },
          { path: 'pending', component: PackagesPendingComponent },
          { path: 'create', component: PackagesCreateComponent },
          { path: 'history', component: PackagesHistoryComponent },
          { path: ':id', component: PackagesDetailComponent },
        ],
      },
      {
        path: 'gym',
        children: [
          { path: '', redirectTo: '', pathMatch: 'full' },
          { path: 'request', component: PackagesCreateComponent },
        ],
      },
    ],
  },
];
