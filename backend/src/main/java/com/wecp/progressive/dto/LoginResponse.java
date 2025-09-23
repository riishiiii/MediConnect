package com.wecp.progressive.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginResponse {
   private String token;
   private String roles;
   private Integer userId;
   private Integer patientId;
   private Integer doctorId;

   @JsonCreator
   public LoginResponse(@JsonProperty("token") String token , String roles, Integer userId, Integer patientId, Integer doctorId) {
      this.token = token;
      this.roles=roles;
      this.userId=userId;
      this.patientId = patientId;
      this.doctorId = doctorId;
   }


   public String getToken() {
      return token;
   }

   public void setToken(String token) {
      this.token = token;
   }
   public String getRoles()
   {
      return this.roles;
   }
   public void setUserId(Integer userId)
   {
      this.userId=userId;
   }

   public long getUserId()
   {
      return this.userId;
   }

   public void setRoles(String roles) {
      this.roles = roles;
   }

   public Integer getPatientId() {
      return patientId;
   }

   public void setPatientId(Integer patientId) {
      this.patientId = patientId;
   }

   public Integer getDoctorId() {
      return doctorId;
   }

   public void setDoctorId(Integer doctorId) {
      this.doctorId = doctorId;
   }
}
