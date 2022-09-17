package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.DepartmentsRepository;
import com.app.dao.TechnologyRepository;
import com.app.pojos.Departments;
import com.app.pojos.Projects;
import com.app.pojos.Technology;
import com.app.service.ITechnologyService;


@Service
public class TechnologyServiceImpl implements ITechnologyService  {
	
	@Autowired
	TechnologyRepository technologyRepository;
	
	@Override
	public List<Technology> getAllTechnology() {
		
		return technologyRepository.findAll();
	}
	
	@Transactional
	@Override
	public Technology addTechnology(Technology technology) {
	
		return technologyRepository.save(technology);
	}
	
	
	@Transactional
	@Override
	public Technology updateTechnology(Technology technology) {
//		if(!technologyRepository.existsById(technology.getTechnologyId())) {
//			 throw new ResourceNotFoundException("Technology Not Found with Projet Id : " +technology.getTechnologyId());
//		 }
//	
		return technologyRepository.save(technology);
	}

	@Override
	public List<Technology> deleteTechnology(int technologyId) {
		Technology technology = technologyRepository.findById(technologyId)
				.orElseThrow(() -> new ResourceNotFoundException("Technology Not Found with ID : " + technologyId));
		technologyRepository.delete(technology);
		
		return technologyRepository.findAll();
	}

}
