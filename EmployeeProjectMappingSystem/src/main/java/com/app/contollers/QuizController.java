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

import com.app.pojos.Options;
import com.app.pojos.Question;
import com.app.service.IAdminService;
import com.app.service.IOptionsService;
import com.app.service.IQuestionService;
import com.app.service.IResourceService;
import com.app.service.ITechnologyService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

	
	@Autowired
	private ITechnologyService technologyService;
	
	@Autowired
	private IQuestionService questionService;
	
	@Autowired
	private IOptionsService optionsService;
	

	//******************** Question **********
	
	@GetMapping("/questions")
	public ResponseEntity<?> getAllQuestion(){
		List<Question> list = questionService.getAllQuestions();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@GetMapping("/questions/{technologyId}")
	public ResponseEntity<?> getAllQuestionsByTechnologyId(@PathVariable int technologyId){
		List<Question> list = questionService.getAllQuestionsByTechnologyId(technologyId);
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	
	@PostMapping("/question/add")
	public ResponseEntity<?> addQuestion(@RequestBody Question question){
		return ResponseEntity.ok().body(questionService.addQuestion(question));
	}
	
	@PutMapping("/question/edit")
	public ResponseEntity<?> updateQuestion(@RequestBody  Question question) {
		System.out.println(question);
		try {
			return ResponseEntity.ok().body(questionService.updateQuestion(question));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/question/delete/{questionId}")
	public ResponseEntity<?> deleteQuestion(@PathVariable int questionId){
		return ResponseEntity.ok().body(questionService.deleteQuestion(questionId));
	}
	
	
	//******************** Options  ***********
	
	
	@GetMapping("/options")
	public ResponseEntity<?> getAllOption(){
		List<Options> list = optionsService.getAllOptions();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping("/option/add")
	public ResponseEntity<?> addOption(@RequestBody Options option){
		return ResponseEntity.ok().body(optionsService.addOption(option));
	}
	
	@PutMapping("/option/edit")
	public ResponseEntity<?> updateOption(@RequestBody Options option) {
		System.out.println(option);
		try {
			return ResponseEntity.ok().body(optionsService.updateOption(option));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/option/delete/{optionId}")
	public ResponseEntity<?> deleteOption(@PathVariable int optionId){
		return ResponseEntity.ok().body(optionsService.deleteOption(optionId));
	}
}
