package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Admin;
import com.app.pojos.Employee;
import com.app.pojos.Roles;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

	
	@Query("SELECT e FROM Employee e WHERE e.email = ?1 and e.password = ?2")
	public Employee findEmployeeByUsernameAndPassword(String userName, String password);
	
	@Query("SELECT e FROM Employee e WHERE e.email = ?1")
	public Employee findByUserName(String username);
	
	@Query("SELECT e FROM Employee e WHERE e.email = ?1")
	public Employee findByEmail(String email);


}
