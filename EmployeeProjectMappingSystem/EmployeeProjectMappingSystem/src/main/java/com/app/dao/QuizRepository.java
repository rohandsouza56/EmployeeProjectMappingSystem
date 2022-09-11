package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Question;

public interface QuizRepository extends JpaRepository<Question, Integer>{

}
