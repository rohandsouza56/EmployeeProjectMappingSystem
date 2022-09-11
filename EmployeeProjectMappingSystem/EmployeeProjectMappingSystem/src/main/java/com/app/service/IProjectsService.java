package com.app.service;

import java.util.List;

import com.app.pojos.Projects;

public interface IProjectsService {

	public List<Projects> getAllProjects() ;
	
	public Projects addProjects(Projects project) ;

	public Projects updateProject(Projects detachedProject) ;

	public List<Projects> deleteProject(int projectId);
}
