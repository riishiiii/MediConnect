
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediConnectService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

    // Patient & Doctor Creation//
  savePatient(patient: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients`, patient);
  }

    saveDoctor(doctor: any): Observable<any> {
     return this.http.post(`${this.apiUrl}/doctors`, doctor);
   }

  // ---------------- PATIENT ----------------
  getPatientById(patientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patients/${patientId}`);
  }

  updatePatient(patientId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/patients/${patientId}`, data);
  }

  deletePatient(patientId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/patients/${patientId}`);
  }
  // ---------------- DOCTOR ----------------
  getDoctorById(doctorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/doctors/${doctorId}`);
  }

  updateDoctor(doctorId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/doctors/${doctorId}`, data);
  }



  deleteDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/doctors/${doctorId}`);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }

  // ---------------- CLINIC ----------------
  getAllClinics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clinics`);
  }

  addClinic(clinic: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clinics`, clinic);
  }

  updateClinic(clinicId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clinics/${clinicId}`, data);
  }

  deleteClinic(clinicId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clinics/${clinicId}`);
  }

  getClinicsByDoctorId(doctorId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/doctors/${doctorId}/clinics`);
  }

  // ---------------- APPOINTMENT ----------------
  getAppointmentsByPatient(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/patient/${patientId}`);
  }

  getAppointmentsByClinic(clinicId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clinics/${clinicId}/appointments`);
  }

  createAppointment(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/appointments`, data);
  }

  updateAppointment(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/appointments/${data.appointmentId}`, data);
  }
}




