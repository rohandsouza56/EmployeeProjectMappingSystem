package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ProjectsRepository;
import com.app.pojos.Projects;

@Service
public class ProjectsService {


	@Autowired
	ProjectsRepository projectsRepository;
	
	public List<Projects> getAllProjects() {
		// TODO Auto-generated method stub
		return projectsRepository.findAll();
	}
	
	
	
	
	public Projects addProjects(Projects project) {
		
		return projectsRepository.save(project);
	}




	public Projects updateProject(Projects detachedProject) {
		
		return projectsRepository.save(detachedProject);
	}




	public List<Projects> deleteProject(int projectId) {
		Projects project = projectsRepository.findById(projectId)
				.orElseThrow(() -> new ResourceNotFoundException("projects Not FOund with StudentID : " + projectId));
		projectsRepository.delete(project);
		
		return projectsRepository.findAll();
	}
	
}
