


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// import { AuthRoutingModule } from './auth-routing.module';

// import { AuthComponent } from './auth.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegistrationComponent } from './components/registration/registration.component';
// import { LogoutComponent } from './components/logout/logout.component';

// import { AuthInterceptor } from '../auth.interceptors';
// import { AuthService } from './services/auth.service';

// @NgModule({
//   declarations: [
//     AuthComponent,
//     LoginComponent,
//     RegistrationComponent,
//     LogoutComponent
//   ],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule,
//     RouterModule,
//     AuthRoutingModule
//   ],
//   providers: [
//     AuthService,
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ],
//   exports: [AuthComponent,
//     LogoutComponent
//   ]
// })
// export class AuthModule {}






import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoutComponent } from './components/logout/logout.component';

import { AuthInterceptor } from '../auth.interceptors';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent
  ]
})
export class AuthModule {}
