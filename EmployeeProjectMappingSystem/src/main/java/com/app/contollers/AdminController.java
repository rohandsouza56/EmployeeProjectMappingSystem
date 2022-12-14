package com.app.contollers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Admin;
import com.app.pojos.Departments;
import com.app.pojos.Employee;
import com.app.pojos.Options;
import com.app.pojos.ProjectRequirement;
import com.app.pojos.Projects;
import com.app.pojos.Question;
import com.app.pojos.Resource;
import com.app.pojos.Technology;
import com.app.service.IAdminService;
import com.app.service.IDepartmentService;
import com.app.service.IEmployeeService;
import com.app.service.IOptionsService;
import com.app.service.IProjectRequirementService;
import com.app.service.IProjectsService;
import com.app.service.IQuestionService;
import com.app.service.IResourceService;
import com.app.service.ITechnologyService;
import com.app.servicesimpl.DepartmentServiceImpl;
import com.app.servicesimpl.EmailService;
import com.app.servicesimpl.ProjectsServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private IProjectsService projectsService;
	
	@Autowired
	private IDepartmentService departmentServiceImpl;
	
	@Autowired
	private IEmployeeService employeeService;
	
	@Autowired
	private IProjectRequirementService projectRequirementService;
	
	@Autowired
	private ITechnologyService technologyService;
	
	@Autowired
	private IAdminService adminService;

	@Autowired
	private IResourceService resouceService;
	
	@Autowired
	private IQuestionService questionService;
	
	@Autowired
	private IOptionsService optionsService;
	
	@Autowired
    EmailService emailService;
	
	
	//*************  Projects ************
	@GetMapping("/projects")
	public ResponseEntity<?> getAllProjects(){
		List<Projects> list = projectsService.getAllProjects();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping("/project/add")
	public ResponseEntity<?> addProject(@RequestBody Projects project){
		return ResponseEntity.ok().body(projectsService.addProjects(project));
	}
	
	@PutMapping("/project/edit")
	public ResponseEntity<?> updateProjectDetails(@RequestBody  Projects project) {
		System.out.println(project);
		try {
			return ResponseEntity.ok().body(projectsService.updateProject(project));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/project/delete/{projectId}")
	public ResponseEntity<?> deleteProjectDetails(@PathVariable int projectId){
		System.out.println(projectId);
		return ResponseEntity.ok().body(projectsService.deleteProject(projectId));
	}
	
	
	
	//******************  Departments ***************
	
	@GetMapping("/departments")
	public ResponseEntity<?> getAllDepartments(){
		List<Departments> list = departmentServiceImpl.getAllDepartments();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@GetMapping("/department/{projectId}")
	public ResponseEntity<?> getDepartment(@PathVariable int projectId){
		List<Departments> list = departmentServiceImpl.getDepartment(projectId);
		list.stream().filter(n-> n.getName().equals("xyz"));
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping("/department/add")
	public ResponseEntity<?> addDepartments(@RequestBody Departments departments){
		return ResponseEntity.ok().body(departmentServiceImpl.addDepartments(departments));
	}
	
	@PutMapping("/department/edit")
	public ResponseEntity<?> updateDepartmentsDetails(@RequestBody  Departments departments) {
		System.out.println(departments);
		try {
			return ResponseEntity.ok().body(departmentServiceImpl.updateDepartments(departments));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/department/delete/{departmentId}")
	public ResponseEntity<?> deleteDepartmentstDetails(@PathVariable int departmentId){
		return ResponseEntity.ok().body(departmentServiceImpl.deleteDepartments(departmentId));
	}
	
	
	//********************** Employee **************
	@GetMapping("/employees")
	public ResponseEntity<?> getAllEmployee(){
		List<Employee> list = employeeService.getAllEmployees();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping("/employee/add")
	public ResponseEntity<?> addemployee(@RequestBody Employee employee){
		System.out.println(employee.toString());
		return ResponseEntity.ok().body(employeeService.addEmployee(employee));
	}
	
	@PutMapping("/employee/edit")
	public ResponseEntity<?> updateDepartmentsDetails(@RequestBody  Employee employee) {
		System.out.println(employee);
		try {
			return ResponseEntity.ok().body(employeeService.updateEmployee(employee));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/employee/delete/{employeeId}")
	public ResponseEntity<?> deleteEmployeeDetails(@PathVariable int employeeId){
		return ResponseEntity.ok().body(employeeService.deleteEmployee(employeeId));
	}
	
	//**********************Project Requirement
	
	
	@GetMapping("/project/{projectId}/requirement")
	public ResponseEntity<?> getAllRequirement(@PathVariable int projectId){
		List<ProjectRequirement> list = projectRequirementService.getAllRequirement(projectId);
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping("/projectreq/add")
	public ResponseEntity<?> addProjectRequirement(@RequestBody ProjectRequirement projectRequirement){
		return ResponseEntity.ok().body(projectRequirementService.addProjectRequirement(projectRequirement));
	}
	
	@PutMapping("/projectreq/edit")
	public ResponseEntity<?> updateProjectRequirement(@RequestBody  ProjectRequirement projectRequirement) {
		System.out.println(projectRequirement);
		try {
			return ResponseEntity.ok().body(projectRequirementService.updateProjectRequirement(projectRequirement));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/projectreq/delete/{requirementId}")
	public ResponseEntity<?> deleteProjectRequirement(@PathVariable int requirementId){
		return ResponseEntity.ok().body(projectRequirementService.deleteProjectRequirement(requirementId));
	}
	
	//*********************** Technology
	
	@GetMapping("/technologies")
	public ResponseEntity<?> getAllTechnology(){
		List<Technology> list = technologyService.getAllTechnology();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping("/technology/add")
	public ResponseEntity<?> addTechnology(@RequestBody Technology technology){
		return ResponseEntity.ok().body(technologyService.addTechnology(technology));
	}
	
	@PutMapping("/technology/edit")
	public ResponseEntity<?> updateTechnologyt(@RequestBody  Technology technology) {
		System.out.println(technology);
		try {
			return ResponseEntity.ok().body(technologyService.updateTechnology(technology));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/technology/delete/{technologyId}")
	public ResponseEntity<?> deleteTechnlogy(@PathVariable int technologyId){
		return ResponseEntity.ok().body(technologyService.deleteTechnology(technologyId));
	}
	
	@PostMapping("/admin/add")
	public ResponseEntity<?> addAdmin(@RequestBody Admin admin){
		return ResponseEntity.ok().body(adminService.addAdmin(admin));
	}
	
	//*********************** Resources
		@GetMapping("/resources")
		public ResponseEntity<?> getAllResource(){
			List<Resource> list = resouceService.getAllResources();
			if(list.size()<=0)
				return ResponseEntity.notFound().build();
			return ResponseEntity.of(Optional.of(list));
		}
		
		@PostMapping("/resource/add")
		public ResponseEntity<?> addResource(@RequestBody Resource resource){
			return ResponseEntity.ok().body(resouceService.addResource(resource));
		}
		
		@PutMapping("/resource/edit")
		public ResponseEntity<?> updateResource(@RequestBody  Resource resource) {
			System.out.println(resource);
			try {
				return ResponseEntity.ok().body(resouceService.updateResource(resource));
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		@DeleteMapping("/resource/delete/{resourceId}")
		public ResponseEntity<?> deleteResource(@PathVariable int resourceId){
			return ResponseEntity.ok().body(resouceService.deleteResource(resourceId));
		}
		
		
		
		
		//******************** Mapping  ***********
		
		@PostMapping("/map/employee")
		public ResponseEntity<?> changeMapping(@RequestBody Employee employee){
			return ResponseEntity.ok().body(employeeService.changeMapping(employee));
		}
		
		@GetMapping("/getadmin")
		public ResponseEntity<?> getEmployeeByuserName(@RequestParam(name = "email") String email){
			return ResponseEntity.ok().body(adminService.getAdmin(email));
		}
		

		@PostMapping("/email/requestchange/{managerId}")
		public Employee register(@RequestBody Employee employee,@PathVariable int managerId) throws MessagingException{
			System.out.println("Registering Customer...");
			//Customer cust=customerService.registerUser(customerDto);
//			System.out.println(cust);
//			if(cust!=null) {

			Employee manager = employeeService.getEmployeeById(managerId);
			
			
			
			if(manager.getEmail()!="")
				emailService.sendSimpleEmail(manager.getEmail(),employee,"Project Change Request from Employee");
			return employee;
		}

		@GetMapping("/downloadFile/{employeeId}")
		public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable int employeeId){
			Employee employee = employeeService.getEmployeeById(employeeId);
			//System.out.println(new ByteArrayResource(employee.getResume()));
		//	MultipartFile file=employee.getResume();
			
			//byte[] encoded = Base64.getEncoder().encode(employee.getResume());
		
			
			String filename="filename";
			return ResponseEntity.ok()
					
					.contentType(MediaType.parseMediaType(employee.getDocType()))
					.header(filename,"attachment:filename=\""+employee.getDocName()+"\"")
					.body(new ByteArrayResource(Base64.getEncoder().encode(employee.getResume())));
		}
		
	

		@PostMapping("/resource/add/{technologyId}")
		public String uploadResource(@PathVariable("technologyId") int technologyId,@RequestParam("link") String link,@RequestParam("description") String description,@RequestParam("files") MultipartFile[] files) {
			Resource resource=new Resource();
			
			Technology tech=technologyService.getTechnologyById(technologyId);
			resource.setTechnology(tech);
			resource.setDescription(description);
			resource.setLink(link);
			
			for (MultipartFile file: files) {
				resouceService.saveResource(technologyId,resource,file);
			}
			return "Sucess";
		}
		
		@PostMapping("/resource/addfile/{resourceId}")
		public String uploadResource(@PathVariable("resourceId") int resourceId,@RequestParam("files") MultipartFile[] files) {
			Resource resource=resouceService.getResourceById(resourceId);
			for (MultipartFile file: files) {
				resouceService.saveResource(resource,file);
			}
			return "Sucess";
		}
		
		
	
}