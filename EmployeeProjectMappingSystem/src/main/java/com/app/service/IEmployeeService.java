package com.app.service;

import java.util.List;

import com.app.pojos.Employee;

public interface IEmployeeService {
	
	public List<Employee> getAllEmployees() ;
	
	public Employee addEmployee(Employee employee) ;

	public Employee updateEmployee(Employee employee) ;

	public List<Employee> deleteEmployee(int employeeId);
	
	public Employee changeMapping(Employee employee);

}
