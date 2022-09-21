package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

	
	@Query("SELECT q FROM Question q WHERE q.technology.technologyId=?1")
	public List<Question> getAllQuestionByTechnologyId(int technologyId);
}
