package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Projects;

public interface ProjectsRepository extends JpaRepository<Projects, Integer>  {
	/*
	@Query("select distinct P from Projects P left join fetch P.projectRequirement")
	List<Projects> findAllProjects();
*/
}
