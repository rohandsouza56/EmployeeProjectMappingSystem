package com.app.service;

import java.util.List;

import com.app.pojos.Resource;

public interface IResourceService {

	public List<Resource> getAllResources();
	
	public Resource addResource(Resource resource) ;

	public Resource updateResource(Resource resource) ;

	public List<Resource> deleteResource(int resourceId);
}
