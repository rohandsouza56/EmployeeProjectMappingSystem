package com.app.service;

import java.util.List;

import com.app.pojos.Options;


public interface IOptionsService {

	public List<Options> getAllOptions();
	
	public Options addOption(Options option) ;

	public Options updateOption(Options option) ;

	public List<Options> deleteOption(int optionId);
}
