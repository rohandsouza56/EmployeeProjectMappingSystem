package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.DepartmentsRepository;
import com.app.dao.EmployeeRepository;
import com.app.dao.ProjectsRepository;
import com.app.dao.RolesRepository;
import com.app.pojos.Departments;
import com.app.pojos.Employee;
import com.app.pojos.Projects;
import com.app.pojos.Roles;
import com.app.service.IEmployeeService;


@Service
public class EmployeeServiceImpl implements IEmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	ProjectsRepository projectsRepository;
	
	@Autowired
	DepartmentsRepository departmentsRepository;
	
	@Autowired
	RolesRepository rolesRepository;
	
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
	
	//@Autowired
	//private PasswordEncoder bcryptEncoder;
	
	@Override
	public List<Employee> getAllEmployees() {
		
		return employeeRepository.findAll();
	}	

	@Transactional
	@Override
	public Employee addEmployee(Employee employee) {
	/*
		if(employee.getProjects()!=null){	
			Projects project=projectsRepository.findById(employee.getProjects().getProjectId())
				.orElseThrow(() -> new ResourceNotFoundException("Project Not Found with Project ID : " + employee.getProjects().getProjectId()));
			
			employee.setProjects(project);
		}
		
		if(employee.getDepartments()!=null) {
			Departments department=departmentsRepository.findById(employee.getDepartments().getDepartmentId())
				.orElseThrow(() -> new ResourceNotFoundException("Department Not Found with Department ID : " + employee.getDepartments().getDepartmentId()));
		
			employee.setDepartments(department);
		}
		*/
		if(employee.getRoles()!=null) {
			System.out.println(employee.getRoles().getRoleId());
			Roles roles=rolesRepository.findById(employee.getRoles().getRoleId())
				.orElseThrow(() -> new ResourceNotFoundException("Roles Not Found with role ID : " + employee.getRoles().getRoleId()));
		
			employee.setRoles(roles);
		}
		//BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		//PasswordEncoder bcryptEncoder=new PasswordEncoder();
//		BCryptPasswordEncoder bcryptEncoder =new BCryptPasswordEncoder();
//		employee.setPassword(bcryptEncoder.encode(employee.getPassword()));
		
		BCryptPasswordEncoder bcryptEncoder =new BCryptPasswordEncoder();
		employee.setPassword(bcryptEncoder.encode(employee.getPassword()));
		return employeeRepository.save(employee);
	}

	
	@Transactional
	@Override
	public Employee updateEmployee(Employee employee) {
		
		
		if(employee.getProjects()!=null){	
			Projects project=projectsRepository.findById(employee.getProjects().getProjectId())
				.orElseThrow(() -> new ResourceNotFoundException("Project Not Found with Project ID : " + employee.getProjects().getProjectId()));
			
			employee.setProjects(project);
		}
		
		if(employee.getDepartments()!=null) {
			Departments department=departmentsRepository.findById(employee.getDepartments().getDepartmentId())
				.orElseThrow(() -> new ResourceNotFoundException("Department Not Found with Department ID : " + employee.getDepartments().getDepartmentId()));
		
			employee.setDepartments(department);
		}
		
		if(employee.getRoles()!=null) {
			Roles roles=rolesRepository.findById(employee.getRoles().getRoleId())
				.orElseThrow(() -> new ResourceNotFoundException("Roles Not Found with role ID : " + employee.getRoles().getRoleId()));
		
			employee.setRoles(roles);
		}
		
		BCryptPasswordEncoder bcryptEncoder =new BCryptPasswordEncoder();
		employee.setPassword(bcryptEncoder.encode(employee.getPassword()));
		
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> deleteEmployee(int employeeId) {
		
		
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employeeId));
		employeeRepository.delete(employee);
		return employeeRepository.findAll();
	}
	
	@Transactional
	@Override
	public Employee changeMapping(Employee employee) {
		
		Employee newEmployee = employeeRepository.findById(employee.getEmployeeId())
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employee.getEmployeeId()));
				
		Projects project = projectsRepository.findById(employee.getProjects().getProjectId())
				.orElseThrow(() -> new ResourceNotFoundException("Project Not Found with Project ID : " + employee.getProjects().getProjectId()));
		
		Departments department = departmentsRepository.findById(employee.getDepartments().getDepartmentId())
				.orElseThrow(() -> new ResourceNotFoundException("Department Not Found with Department ID : " + employee.getDepartments().getDepartmentId()));
		
		newEmployee.setProjects(project);
		newEmployee.setDepartments(department);
		
		return employeeRepository.save(newEmployee);
	
	}

	@Override
	public Employee saveFile(MultipartFile file) {
		  String docname = file.getOriginalFilename();
		  try {
			  Employee employee = new Employee(docname,file.getContentType(),file.getBytes());
			  return employeeRepository.save(employee);
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
		return null;
	}
	
	

	@Override
	public Employee getEmployeeById(int employeeId) {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employeeId));
		return employee;
	}

	@Override
	public Employee getEmployeeByuserName(String userName) {
		Employee employee = employeeRepository.findByUserName(userName);
			if(employee==null) {
				throw new ResourceNotFoundException("Employee Not Found with userName "+userName);
			}
				
		return employee;
	}
	
	@Transactional
	@Override
	public Employee saveFile(int employeeId,MultipartFile file) {
		
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employeeId));
		
		
		  String docname = file.getOriginalFilename();
		  try {
		//	  Employee employee = new Employee(docname,file.getContentType(),file.getBytes());
			 // employee.setDocName(docname.);
			  employee.setResume(file.getBytes());
			  employee.setDocName(docname);
			  employee.setDocType(file.getContentType());
			  
			  System.out.println(employee);
			  return employeeRepository.save(employee);
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
		return null;
	}
	
	@Transactional
	@Override
	public Employee updatePassword(Employee newEmployee) {
		
		Employee oldEmployee=employeeRepository.findById(newEmployee.getEmployeeId())
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + newEmployee.getEmployeeId()));
		
		BCryptPasswordEncoder bcryptEncoder =new BCryptPasswordEncoder();
		oldEmployee.setPassword(bcryptEncoder.encode(newEmployee.getPassword()));
		
		return employeeRepository.save(oldEmployee);
		
	}


	
	
}
