package com.app.service;

import java.util.List;

import com.app.pojos.Question;
import com.app.pojos.Technology;

public interface IQuestionService {

	
	public List<Question> getAllQuestions();
	
	public Question addQuestion(Question question) ;

	public Question updateQuestion(Question question) ;

	public List<Question> deleteQuestion(int questionId);

	public List<Question> getAllQuestionsByTechnologyId(int technologyId);
}
