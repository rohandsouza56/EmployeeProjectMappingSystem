package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{

}
