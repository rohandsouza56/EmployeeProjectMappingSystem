package com.app.service;

import java.util.List;
import com.app.pojos.ProjectRequirement;
import com.app.pojos.Technology;

public interface ITechnologyService {
	
	public List<Technology> getAllTechnology();
	
	public Technology addTechnology(Technology technology);
	
	public Technology updateTechnology(Technology technology);

	public List<Technology> deleteTechnology(int technologyId);




}



