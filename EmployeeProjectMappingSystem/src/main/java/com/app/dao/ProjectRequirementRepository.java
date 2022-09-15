package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.ProjectRequirement;

public interface ProjectRequirementRepository extends JpaRepository<ProjectRequirement,Integer>{

	
	@Query(" select p from ProjectRequirement p where p.projects.projectId= ?1")
	public List<ProjectRequirement> findProjectRequirementByProjectId(int projectId);
}
