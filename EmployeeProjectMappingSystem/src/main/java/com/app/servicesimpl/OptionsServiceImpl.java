package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.OptionsRepository;
import com.app.pojos.Options;
import com.app.service.IOptionsService;


@Service
public class OptionsServiceImpl implements IOptionsService{

	@Autowired
	OptionsRepository optionsRepository;
	
	
	@Override
	public List<Options> getAllOptions() {
		
		return optionsRepository.findAll();
	}
	
	@Override
	public Options addOption(Options option) {
		
		return optionsRepository.save(option);
	}

	@Override
	public Options updateOption(Options option) {
	
		return optionsRepository.save(option);
	}

	@Override
	public List<Options> deleteOption(int optionId) {
		Options option= optionsRepository.findById(optionId)
				.orElseThrow(() -> new ResourceNotFoundException("Option Not Found with Option Id : " + optionId));
			
		optionsRepository.delete(option);
		
		return optionsRepository.findAll();
	}
}
