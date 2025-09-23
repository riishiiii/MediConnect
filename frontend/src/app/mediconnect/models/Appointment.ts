

import { Clinic } from './Clinic';
import { Doctor } from './Doctor';
import { User } from './User';

export class Appointment {
  appointmentId: number;
  patientId: number;
  clinic: Clinic;
  doctor: Doctor;
  appointmentDate: string;
  status: string;
  purpose: string;

  constructor(
    appointmentId: number,
    patientId: number,
    clinic: Clinic,
    doctor: Doctor,
    appointmentDate: string,
    status: string,
    purpose: string
  ) {
    this.appointmentId = appointmentId;
    this.patientId = patientId;
    this.clinic = clinic;
    this.doctor = doctor;
    this.appointmentDate = appointmentDate;
    this.status = status;
    this.purpose = purpose;
  }
}
