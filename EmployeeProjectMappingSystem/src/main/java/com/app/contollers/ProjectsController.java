package com.app.contollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.pojos.Options;
import com.app.pojos.Projects;
import com.app.pojos.Quiz;
import com.app.services.OptionsService;
import com.app.services.ProjectsService;
import com.app.services.QuizService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectsController {

	@Autowired
	private ProjectsService projectsService;
	
	@Autowired
	private QuizService quizService;
	
	@Autowired
	private OptionsService optionsService;
	
	@GetMapping("/projects")
	public ResponseEntity<?> getAllProjects(){
		List<Projects> list = projectsService.getAllProjects();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}

	
	
	@PostMapping("/addproject")
	public ResponseEntity<?> addProject(@RequestBody Projects project){
		return ResponseEntity.ok().body(projectsService.addProjects(project));
	}
	
	@PostMapping("/addoption")
	public ResponseEntity<?> addOptions(@RequestBody Options option){
		return ResponseEntity.ok().body(optionsService.addOptions(option));
	}
	
	@PostMapping("/addquiz")
	public ResponseEntity<?> addQuiz(@RequestBody Quiz quiz){
		return ResponseEntity.ok().body(quizService.addQuestion(quiz));
	}
}