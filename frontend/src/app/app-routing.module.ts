// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { MediConnectModule } from './mediconnect/mediconnect.module';

// const routes: Routes = [
//   {
//     path: 'auth',
//     loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
//   },
//   {
//     path: 'mediconnect',
//     loadChildren: () => import('./mediconnect/mediconnect.module').then((m) => m.MediConnectModule),
//   },
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: '/auth',  // Redirect to 'auth' route by default
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },   // default route → login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', redirectTo: 'login' }   // wildcard → redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
