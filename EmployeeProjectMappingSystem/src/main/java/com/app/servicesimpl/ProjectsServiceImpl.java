package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ProjectsRepository;
import com.app.pojos.Projects;
import com.app.service.IProjectsService;

@Service
public class ProjectsServiceImpl implements IProjectsService {


	@Autowired
	ProjectsRepository projectsRepository;
	
	
	@Override
	public List<Projects> getAllProjects() {
		// TODO Auto-generated method stub
		return projectsRepository.findAll();
	}
	
	
	
	@Override
	public Projects addProjects(Projects project) {
		
		return projectsRepository.save(project);
	//	return projectsRepository.saveAndFlush(project);
	}



	@Override
	public Projects updateProject(Projects detachedProject) {
		
		return projectsRepository.save(detachedProject);
	}




	public List<Projects> deleteProject(int projectId) {
		Projects project = projectsRepository.findById(projectId)
				.orElseThrow(() -> new ResourceNotFoundException("Project Not Found with Projet Id : " + projectId));
		projectsRepository.delete(project);
		
		return projectsRepository.findAll();
	}
	
}
