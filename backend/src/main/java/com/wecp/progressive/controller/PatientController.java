
package com.wecp.progressive.controller;

import com.wecp.progressive.dto.PatientDTO;
import com.wecp.progressive.entity.Patient;
import com.wecp.progressive.service.impl.PatientServiceImplArraylist;
import com.wecp.progressive.service.impl.PatientServiceImplJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    PatientServiceImplJpa patientServiceImplJpa;

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        try {
            List<Patient> patientList = patientServiceImplJpa.getAllPatients();
            return new ResponseEntity<>(patientList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<?> getPatientById(@PathVariable int patientId) {
        try {
            Patient patient = patientServiceImplJpa.getPatientById(patientId);
            return new ResponseEntity<>(patient, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<?> addPatient(@RequestBody Patient patient) {
        try {
            int patientId = patientServiceImplJpa.addPatient(patient);
            return new ResponseEntity<>(patientId, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{patientId}")
    public ResponseEntity<?> updatePatient(@PathVariable int patientId, @RequestBody PatientDTO patient) {
        try {
            patient.setPatientId(patientId);
            patientServiceImplJpa.modifyPatientDetails(patient);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{patientId}")
    public ResponseEntity<?> deletePatient(@PathVariable int patientId) {
        try {
            patientServiceImplJpa.deletePatient(patientId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}