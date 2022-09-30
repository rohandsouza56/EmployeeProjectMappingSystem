package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Resource;

public interface IResourceService {

	public List<Resource> getAllResources();
	
	public Resource addResource(Resource resource) ;

	public Resource updateResource(Resource resource) ;

	public List<Resource> deleteResource(int resourceId);

	Resource saveResource(int technologyId, Resource resource, MultipartFile file);

	Resource getResourceById(int resourceId);

	Resource saveResource(Resource resource, MultipartFile file);
}
