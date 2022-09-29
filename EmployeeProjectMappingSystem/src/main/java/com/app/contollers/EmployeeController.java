package com.app.contollers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Departments;
import com.app.pojos.Employee;
import com.app.pojos.Projects;
import com.app.pojos.Skills;
import com.app.pojos.Technology;
import com.app.service.IDepartmentService;
import com.app.service.IEmployeeService;
import com.app.service.IProjectsService;
import com.app.service.ISkillService;
import com.app.service.ITechnologyService;
import com.app.servicesimpl.EmailService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	@Autowired
	private IDepartmentService departmentService;
	
	@Autowired
	private IProjectsService projectsService;
	
	@Autowired
	private IEmployeeService employeeService;
	
	@Autowired
	private ISkillService skillService;
	
	@Autowired
	private ITechnologyService technologyService;
	
	@Autowired
    EmailService emailService;
	
	@GetMapping("/projects")
	public ResponseEntity<?> getAllProjects(){
		List<Projects> list = projectsService.getAllProjects();
		
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@GetMapping("/departments")
	public ResponseEntity<?> getAllDepartments(){
		List<Departments> list = departmentService.getAllDepartments();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@GetMapping("/employees")
	public ResponseEntity<?> getAllEmployee(){
		List<Employee> list = employeeService.getAllEmployees();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@GetMapping("/employee/{employeeId}")
	public ResponseEntity<?> getEmployeeById(@PathVariable int employeeId){
		return ResponseEntity.ok().body(employeeService.getEmployeeById(employeeId));
	}
	
	@GetMapping("/employeebyusername")
	public ResponseEntity<?> getEmployeeByuserName(@RequestParam(name = "userName") String userName){
		return ResponseEntity.ok().body(employeeService.getEmployeeByuserName(userName));
	}
	
	@GetMapping("/skill")
	public ResponseEntity<?> getAllSkills(){
		List<Skills> list = skillService.getAllSkill();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	@GetMapping("/skill/{employeeId}")
	public ResponseEntity<?> getAllSkills(@PathVariable int employeeId){
		List<Skills> list = skillService.getAllEmployeeSkills(employeeId);
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	
	
	
	@PostMapping("/skill/add")
	public ResponseEntity<?> addSkills(@RequestBody Skills skill){
		return ResponseEntity.ok().body(skillService.addSkill(skill));
	}
	
	@PutMapping("/skill/edit")
	public ResponseEntity<?> updateSkills(@RequestBody  Skills skill) {
		System.out.println(skill);
		try {
			return ResponseEntity.ok().body(skillService.updateSkill(skill));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/skill/delete/{skillId}")
	public ResponseEntity<?> deleteSkills(@PathVariable int skillId){
		return ResponseEntity.ok().body(skillService.deleteSkill(skillId));
	}
	
	
	
	@PostMapping("/resume")
	public String uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
		for (MultipartFile file: files) {
			employeeService.saveFile(file);
			
		}
		return "Sucess";
	}
	
	@PostMapping("/resume/{employeeId}")
	public String uploadMultipleFiles(@PathVariable int employeeId,@RequestParam("files") MultipartFile[] file) {
		//for (MultipartFile file: files) {
			employeeService.saveFile(employeeId,file[0]);
			
		//}
		return "Sucess";
	}
	
	@PostMapping("/certificatepdf/{employeeId}")
	
	public String uploadMultipleFilesPdf(@RequestParam("files") MultipartFile[] files,@PathVariable int employeeId,@RequestBody Skills skills ) {
		
		System.out.println("skill "+skills+"skilll.skillid"+skills.toString());
		for (MultipartFile file: files) {
			skillService.saveCertificatePdf(employeeId,skills,file);
			
		}
		return "Sucess";
	}
	
	@PostMapping("/certificatepdf")
	public String uploadMultipleFilesPdf(@RequestParam("employeeId") int employeeId,@RequestParam("skill") String skill,@RequestParam("dateOfCompletion") String dateOfCompletion,@RequestParam("certificationLink") String certificationLink,@RequestParam("technologyId") int technologyId,@RequestParam("files") MultipartFile[] files) {
		Skills skillObject=new Skills();
		
		//skillObject.setDateOfCompletion((LocalDate)dateOfCompletion);
		skillObject.setSkill(skill);
		// DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MMM-dd");
		// LocalDate dt = dtf.parseLocalDate(dateOfCompletion);
		
		System.out.println(dateOfCompletion);
	//	skillObject.setDateOfCompletion(dt);
		
		
		
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		

		  //convert String to LocalDate
		  LocalDate localDate = LocalDate.parse(dateOfCompletion, formatter);

		  skillObject.setDateOfCompletion(localDate);
		
		skillObject.setCertificationLink(certificationLink);
		
		System.out.println(technologyId);
		Technology tech=technologyService.getTechnologyById(technologyId);
		
		System.out.println(tech.toString());
		skillObject.setTechnologyId(tech);
		System.out.println(skillObject.toString());
		for (MultipartFile file: files) {
			//skillService.saveCertificatePdf(file);
			skillService.saveCertificatePdf(employeeId,skillObject,file);
		}
		return "Sucess";
	}
	
	@PostMapping("/employee/updatepassword")
	public ResponseEntity<?> updatePasswordEmployee(@RequestBody Employee employee){
		return ResponseEntity.ok().body(employeeService.updatePassword(employee));
	}


	
	
}
