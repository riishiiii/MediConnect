
package com.wecp.progressive.controller;

import com.wecp.progressive.dao.PatientDAO;
import com.wecp.progressive.entity.Patient;
import com.wecp.progressive.service.PatientService;
// import com.wecp.progressive.service.impl.PatientServiceImplArraylist;
import com.wecp.progressive.service.impl.PatientServiceImplArraylist;
import com.wecp.progressive.service.impl.PatientServiceImplJpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.spec.ECFieldF2m;
import java.util.List;
@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
     PatientServiceImplJpa pr;
     @Autowired
     PatientServiceImplArraylist patientServiceImplArraylist;
     

    

    public PatientController(PatientServiceImplJpa pr, PatientServiceImplArraylist patientServiceImplArraylist) {
        this.pr = pr;
        this.patientServiceImplArraylist = patientServiceImplArraylist;
    }

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatient() throws Exception {
        return new ResponseEntity<>(pr.getAllPatients(),HttpStatus.OK);
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<Patient> getPatientById(@PathVariable int patientId) throws Exception {
        return new ResponseEntity<>(pr.getPatientById(patientId),HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Integer> addPatient(@RequestBody Patient patient) throws Exception {
        return new ResponseEntity<>(pr.addPatient(patient),HttpStatus.OK);
    }





    @PutMapping("/{id}")
    public ResponseEntity<?> updatePatient(@PathVariable int id,@RequestBody Patient patient) throws Exception {
        
        pr.updatePatient(patient);
        return new ResponseEntity<>(HttpStatus.OK);
    }




    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable int id) throws Exception {
       pr.deletePatient(id);
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    
    @GetMapping("/fromArrayList")
    public ResponseEntity<List<Patient>> getAllPatientFromArrayList() throws Exception {
        return new ResponseEntity<>(patientServiceImplArraylist.getAllPatients(),HttpStatus.OK);
    }
    @PostMapping("/toArrayList")
    public ResponseEntity<?> addPatientToArrayList(@RequestBody Patient patient) throws Exception {
       return new ResponseEntity<>(pr.addPatient(patient),HttpStatus.CREATED);
    }
    @GetMapping("fromArrayList/sorted")
    public ResponseEntity<List<Patient>> getAllPatientSortedByNameFromArrayList() throws Exception {
        return new ResponseEntity<>(patientServiceImplArraylist.getAllPatientSortedByName(),HttpStatus.OK);
    }
}
