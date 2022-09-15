package com.app.service;

import java.util.List;

import com.app.pojos.ProjectRequirement;
import com.app.pojos.Projects;

public interface IProjectRequirementService {

	
	public List<ProjectRequirement> getAllRequirement(int projectId);
	
	public ProjectRequirement addProjectRequirement(ProjectRequirement projectRequirement);
	
	public ProjectRequirement updateProjectRequirement(ProjectRequirement projectRequirement);

	public List<ProjectRequirement> deleteProjectRequirement(int projectRequirementId);
}
