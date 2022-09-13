package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.DepartmentsRepository;
import com.app.dao.EmployeeRepository;
import com.app.dao.ProjectsRepository;
import com.app.pojos.Departments;
import com.app.pojos.Employee;
import com.app.pojos.Projects;
import com.app.service.IEmployeeService;


@Service
public class EmployeeServiceImpl implements IEmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	ProjectsRepository projectsRepository;
	
	@Autowired
	DepartmentsRepository departmentsRepository;
	
	
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
	
	//@Autowired
	//private PasswordEncoder bcryptEncoder;
	
	@Override
	public List<Employee> getAllEmployees() {
		
		return employeeRepository.findAll();
	}

	@Override
	public Employee addEmployee(Employee employee) {
//		Projects project=projectsRepository.findById(employee.getProjects().getProjectId())
//				.orElseThrow(() -> new ResourceNotFoundException("Project Not Found with Project ID : " + employee.getProjects().getProjectId()));
			
//		employee.setProjects(project);
//		
//		Departments department=departmentsRepository.findById(employee.getDepartments().getDepartmentId())
//				.orElseThrow(() -> new ResourceNotFoundException("Department Not Found with Department ID : " + employee.getDepartments().getDepartmentId()));
//		
//		employee.setDepartments(department);
		
		//BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		//PasswordEncoder bcryptEncoder=new PasswordEncoder();
		BCryptPasswordEncoder bcryptEncoder =new BCryptPasswordEncoder();
		employee.setPassword(bcryptEncoder.encode(employee.getPassword()));
		
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> deleteEmployee(int employeeId) {
		
		
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employeeId));
		employeeRepository.delete(employee);
		return employeeRepository.findAll();
	}

}
