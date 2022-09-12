package com.app.servicesimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.QuizRepository;
import com.app.pojos.Question;

@Service
public class QuizServiceImpl {

	@Autowired
	QuizRepository quizRepoditory;
	public Question addQuestion(Question quiz ) {
		// TODO Auto-generated method stub
		
		System.out.println(quiz);
		return quizRepoditory.save(quiz);
	}
}

