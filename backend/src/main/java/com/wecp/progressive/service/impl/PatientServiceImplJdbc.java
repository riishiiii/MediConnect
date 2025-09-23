package com.wecp.progressive.service.impl;

import com.wecp.progressive.dao.PatientDAO;
import com.wecp.progressive.entity.Patient;
import com.wecp.progressive.entity.Patient;
import com.wecp.progressive.service.PatientService;

import java.sql.SQLException;
import java.util.Comparator;
import java.util.List;

public class PatientServiceImplJdbc implements PatientService {
    private PatientDAO patientDAO;

    public PatientServiceImplJdbc(PatientDAO patientDAO) {
         this.patientDAO = patientDAO;
    }

    @Override
    public List<Patient> getAllPatients() throws Exception {
        try {
            return patientDAO.getAllPatients();
        } catch (SQLException e) {
            throw new Exception("Error fetching all patients", e);
        }
    }

    @Override
    public Integer addPatient(Patient patient) throws Exception {
        try {
            return patientDAO.addPatient(patient);
        } catch (SQLException e) {
            throw new Exception("Error adding patient: " + patient.getFullName(), e);
        }
    }

    @Override
    public List<Patient> getAllPatientSortedByName() throws Exception {
        try {
            List<Patient> sortedPatients = patientDAO.getAllPatients();
            if (!sortedPatients.isEmpty()) {
                sortedPatients.sort(Comparator.comparing(Patient::getFullName));
            }
            return sortedPatients;
        } catch (SQLException e) {
            throw new Exception("Error fetching patients sorted by Name ", e);
        }
    }

    @Override
    public void updatePatient(Patient patient) throws Exception {
        try {
            patientDAO.updatePatient(patient);
        } catch (SQLException e) {
            throw new Exception("Error updating patient with ID " + patient.getPatientId(), e);
        }
    }

    @Override
    public void deletePatient(int patientId) throws Exception {
        try {
            patientDAO.deletePatient(patientId);
        } catch (SQLException e) {
            throw new Exception("Error deleting patient with ID " + patientId, e);
        }
    }

    @Override
    public Patient getPatientById(int patientId) throws Exception {
        try {
            Patient patient = patientDAO.getPatientById(patientId);
            return patient;
        } catch (Exception e) {
            throw new Exception("Error fetching patient with ID " + patientId, e);
        }
    }
}
