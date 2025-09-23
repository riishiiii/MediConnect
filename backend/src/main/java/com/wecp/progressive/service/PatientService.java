

package com.wecp.progressive.service;

import com.wecp.progressive.dto.PatientDTO;
import com.wecp.progressive.entity.Patient;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PatientService {

    List<Patient> getAllPatients() throws Exception;

    Integer addPatient(Patient patient) throws Exception;

    List<Patient> getAllPatientSortedByName() throws Exception;

    default void emptyArrayList() {
    }

    void updatePatient(Patient patient) throws Exception;
    //Do not implement these methods in PatientServiceImplArraylist.java class

    default void deletePatient(int patientId) throws Exception{}

    default Patient getPatientById(int patientId) throws Exception {
        return null;
    }

    //Do not implement these methods in PatientServiceImplArraylist.java and PatientServiceImplJdbc.java class
    //Do not implement this method until day-13
    default public void modifyPatientDetails(PatientDTO patientDTO) throws Exception{ }
}