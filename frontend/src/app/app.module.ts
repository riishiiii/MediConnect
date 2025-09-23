import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { MediConnectModule } from './mediconnect/mediconnect.module';
import { PatientSampleComponent } from './mediconnect/components/patientsample/patientsample.component';
import { DoctorSampleComponent } from './mediconnect/components/doctorsample/doctorsample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth.interceptors';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // PatientSampleComponent,   // ✅ standalone component goes in imports
    // DoctorSampleComponent,
    // MediConnectModule,
    // ReactiveFormsModule,
    FormsModule,
    AuthModule 
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
