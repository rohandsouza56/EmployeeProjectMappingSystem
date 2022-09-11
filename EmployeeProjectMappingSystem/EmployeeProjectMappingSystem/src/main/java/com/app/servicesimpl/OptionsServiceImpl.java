package com.app.servicesimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OptionsRepository;
import com.app.pojos.Options;


@Service
public class OptionsServiceImpl {

	@Autowired
	OptionsRepository optionsRepository;
	
	public Options addOptions(Options options) {
		// TODO Auto-generated method stub
		return optionsRepository.save(options);
	}
}
