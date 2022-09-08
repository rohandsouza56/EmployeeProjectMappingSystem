package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.QuizRepository;
import com.app.pojos.Quiz;

@Service
public class QuizService {

	@Autowired
	QuizRepository quizRepoditory;
	public Quiz addQuestion(Quiz quiz ) {
		// TODO Auto-generated method stub
		
		System.out.println(quiz);
		return quizRepoditory.save(quiz);
	}
}

