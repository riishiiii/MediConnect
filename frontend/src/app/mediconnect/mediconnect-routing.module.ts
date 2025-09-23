


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { PatientEditComponent } from './components/patientedit/patientedit.component';
// import { DoctorEditComponent } from './components/doctoredit/doctoredit.component';
// import { ClinicEditComponent } from './components/clinicedit/clinicedit.component';
// import { AppointmentCreateComponent } from './components/appointment/appointment.component';

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'patient-edit', component: PatientEditComponent },
//   { path: 'doctor-edit', component: DoctorEditComponent },
//   { path: 'clinic-edit/:id', component: ClinicEditComponent },
//   { path: 'appointment', component: AppointmentCreateComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class MediconnectRoutingModule {}




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('../auth/auth.module').then(m => m.AuthModule) // default go to auth for now
//   },
//   // Example app-level lazy routes you may extend
//   {
//     path: 'app',
//     loadChildren: () =>
//       import('./mediconnect.module').then(m => m.MediConnectModule)
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class MediconnectRoutingModule {}






import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../auth/auth.module').then(m => m.AuthModule) // default go to auth for now
  },
  // Example app-level lazy routes you may extend
  {
    path: 'app',
    loadChildren: () =>
      import('./mediconnect.module').then(m => m.MediConnectModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MediconnectRoutingModule {}
