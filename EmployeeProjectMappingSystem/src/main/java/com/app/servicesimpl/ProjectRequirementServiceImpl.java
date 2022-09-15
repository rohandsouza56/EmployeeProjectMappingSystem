package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ProjectRequirementRepository;
import com.app.dao.ProjectsRepository;
import com.app.pojos.ProjectRequirement;
import com.app.pojos.Projects;
import com.app.service.IProjectRequirementService;

@Service
public class ProjectRequirementServiceImpl implements IProjectRequirementService {

	
	@Autowired
	ProjectRequirementRepository projectRequirementRepository;
	
	@Autowired
	ProjectsRepository projectsRepository;
	
	
	@Override
	public List<ProjectRequirement> getAllRequirement(int projectId) {
		 if(!projectsRepository.existsById(projectId)) {
			 throw new ResourceNotFoundException("Project Not Found with Projet Id : " + projectId);
		 }

		 return	projectRequirementRepository.findProjectRequirementByProjectId(projectId);
	}
	
	@Override
	public ProjectRequirement addProjectRequirement(ProjectRequirement projectRequirement) {
		
		if(!projectsRepository.existsById(projectRequirement.getProjects().getProjectId())) {
			 throw new ResourceNotFoundException("Project Not Found with Projet Id : " + projectRequirement.getProjects().getProjectId());
		 }
		
		return projectRequirementRepository.save(projectRequirement);
	}
	
	@Override
	public ProjectRequirement updateProjectRequirement(ProjectRequirement projectRequirement) {
		
		if(!projectsRepository.existsById(projectRequirement.getProjects().getProjectId())) {
			 throw new ResourceNotFoundException("Project Not Found with Projet Id : " + projectRequirement.getProjects().getProjectId());
		 }
		
		return projectRequirementRepository.save(projectRequirement);
	}
	
	@Override
	public List<ProjectRequirement> deleteProjectRequirement(int projectRequirementId) {
		ProjectRequirement projectRequirement = projectRequirementRepository.findById(projectRequirementId)
				.orElseThrow(() -> new ResourceNotFoundException("ProjectRequirement Not Found with ProjetRequirement Id : " + projectRequirementId));
		projectRequirementRepository.delete(projectRequirement);
		
		return projectRequirementRepository.findAll();
	}
}
