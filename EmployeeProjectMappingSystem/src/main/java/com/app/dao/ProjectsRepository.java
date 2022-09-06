package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Projects;

public interface ProjectsRepository extends JpaRepository<Projects, Integer>  {
	
}
