package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ResourceRepository;
import com.app.pojos.ProjectRequirement;
import com.app.pojos.Resource;
import com.app.service.IResourceService;


@Service
public class ResourceServiceImpl implements IResourceService{

	
	@Autowired
	ResourceRepository resourceRepository;
	
	@Override
	public List<Resource> getAllResources() {
		
		return resourceRepository.findAll();
	}

	@Override
	public Resource addResource(Resource resource) {
		
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
