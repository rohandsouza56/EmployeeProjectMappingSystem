package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Admin;
import com.app.pojos.Departments;


public interface AdminRepository extends JpaRepository<Admin,Integer>{
	@Query("SELECT a FROM Admin a WHERE a.email = ?1")
	public Admin findByEmail(String email);

}
