package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

	
	@Query("SELECT e FROM Employee e WHERE e.userName = ?1 and e.password = ?2")
	public Employee findEmployeeByUsernameAndPassword(String userName, String password);
	
	@Query("SELECT e FROM Employee e WHERE e.userName = ?1")
	public Employee findByUsername(String username);
}