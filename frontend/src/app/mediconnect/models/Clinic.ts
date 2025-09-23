

import { Appointment } from './Appointment';
import { Doctor } from './Doctor';
import { User } from './User';

export class Clinic {
  clinicId: number;
  clinicName: string;
  location: string;
  contactNumber: string;
  establishedYear: number;
  //doctors?: User[];

  // Relationships
  doctors: Doctor[] = [];
  appointments: Appointment[] = [];

  constructor(
    clinicId: number,
    clinicName: string,
    location: string,
    contactNumber: string,
    establishedYear: number
  ) {
    this.clinicId = clinicId;
    this.clinicName = clinicName;
    this.location = location;
    this.contactNumber = contactNumber;
    this.establishedYear = establishedYear;
  }
}
