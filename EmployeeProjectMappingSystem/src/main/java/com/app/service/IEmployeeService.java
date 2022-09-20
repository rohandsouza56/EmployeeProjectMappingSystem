package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Employee;

public interface IEmployeeService {
	
	public List<Employee> getAllEmployees() ;
	
	public Employee addEmployee(Employee employee) ;

	public Employee updateEmployee(Employee employee) ;

	public List<Employee> deleteEmployee(int employeeId);
	
	public Employee changeMapping(Employee employee);

	public Employee saveFile(MultipartFile file);
	
	public Employee saveFile(int employeeId,MultipartFile file);

}
