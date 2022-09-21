package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.QuestionRepository;
import com.app.pojos.Question;
import com.app.service.IQuestionService;

@Service
public class QuestionServiceImpl implements IQuestionService {

	@Autowired
	QuestionRepository questionRepoditory;
	

	@Override
	public List<Question> getAllQuestions() {
		
		return questionRepoditory.findAll();
	}
	
	public Question addQuestion(Question question ) {

		return questionRepoditory.save(question);
	}


	@Override
	public Question updateQuestion(Question question) {
		
		return  questionRepoditory.save(question);
	}


	@Override
	public List<Question> deleteQuestion(int questionId) {
		Question question= questionRepoditory.findById(questionId)
			.orElseThrow(() -> new ResourceNotFoundException("Question Not Found with Question Id : " + questionId));
		
		questionRepoditory.delete(question);
		
		return questionRepoditory.findAll();
	}

	@Override
	public List<Question> getAllQuestionsByTechnologyId(int technologyId) {
		List<Question> list=questionRepoditory.getAllQuestionByTechnologyId(technologyId);
		return list;
	}
}

