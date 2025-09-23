

package com.wecp.progressive.service;

import com.wecp.progressive.dto.DoctorDTO;
import com.wecp.progressive.entity.Doctor;

import java.util.List;

public interface DoctorService {

    public List<Doctor> getAllDoctors() throws Exception;

    public Integer addDoctor(Doctor doctor) throws Exception;

    public List<Doctor> getDoctorSortedByExperience() throws Exception;

    default void emptyArrayList() {
    }

   //Do not implement these methods in DoctorServiceImplArraylist.java class
    public void updateDoctor(Doctor doctor) throws Exception;

    public void deleteDoctor(int doctorId) throws Exception;

    //Do not implement these methods in DoctorServiceImplArraylist.java and DoctorServiceImplJdbc.java class
    // Do not implement this method until day-13
    default Doctor getDoctorById(int doctorId) throws Exception { return null; }
    default public void modifyDoctorDetails(DoctorDTO doctorDTO) throws Exception { }
}