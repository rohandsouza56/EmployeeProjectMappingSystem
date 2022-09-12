package com.app.contollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Departments;
import com.app.pojos.Options;
import com.app.pojos.Projects;
import com.app.pojos.Question;
import com.app.servicesimpl.DepartmentServiceImpl;
import com.app.servicesimpl.OptionsServiceImpl;
import com.app.servicesimpl.ProjectsServiceImpl;
import com.app.servicesimpl.QuizServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private ProjectsServiceImpl projectsService;
	
	@Autowired
	private DepartmentServiceImpl departmentServiceImpl;
	
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
	
	
	@DeleteMapping("/project/{projectId}")
	public ResponseEntity<?> deleteProjectDetails(@PathVariable int projectId){
		return ResponseEntity.ok().body(projectsService.deleteProject(projectId));
	}
	
	
	
	@GetMapping("/departments")
	public ResponseEntity<?> getAllDepartments(){
		List<Departments> list = departmentServiceImpl.getAllDepartments();
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
	
	@DeleteMapping("/department/{departmentId}")
	public ResponseEntity<?> deleteDepartmentstDetails(@PathVariable int departmentId){
		return ResponseEntity.ok().body(projectsService.deleteProject(departmentId));
	}
}