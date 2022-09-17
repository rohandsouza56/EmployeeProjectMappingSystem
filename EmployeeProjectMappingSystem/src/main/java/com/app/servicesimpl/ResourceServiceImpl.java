package com.app.servicesimpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ResourceRepository;
import com.app.dao.TechnologyRepository;
import com.app.pojos.ProjectRequirement;
import com.app.pojos.Projects;
import com.app.pojos.Resource;
import com.app.pojos.Technology;
import com.app.service.IResourceService;


@Service
public class ResourceServiceImpl implements IResourceService{

	
	@Autowired
	ResourceRepository resourceRepository;
	

	@Autowired
	TechnologyRepository technologyRepository;
	
	@Override
	public List<Resource> getAllResources() {
		
		return resourceRepository.findAll();
	}

	@Transactional
	@Override
	public Resource addResource(Resource resource) {
		Technology technology = technologyRepository.findById(resource.getTechnology().getTechnologyId())
				.orElseThrow(() -> new ResourceNotFoundException("Technology Not Found with ID : " + resource.getTechnology().getTechnologyId()));
		
		resource.setTechnology(technology);
		return resourceRepository.save(resource);
	}

	@Override
	public Resource updateResource(Resource resource) {
		
		return resourceRepository.save(resource);
	}

	@Override
	public List<Resource> deleteResource(int resourceId) {
		
		Resource resource=resourceRepository.findById(resourceId)
				.orElseThrow(() -> new ResourceNotFoundException("Resource Not Found with Resource Id : " + resourceId));
		
		resourceRepository.delete(resource);
		return resourceRepository.findAll();
	}

}
