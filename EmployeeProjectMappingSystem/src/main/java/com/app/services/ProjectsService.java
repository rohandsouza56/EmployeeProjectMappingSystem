package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		// TODO Auto-generated method stub
		return projectsRepository.save(project);
	}

}
