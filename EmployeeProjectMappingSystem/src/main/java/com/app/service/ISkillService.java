package com.app.service;

import java.util.List;

import com.app.pojos.Skills;

public interface ISkillService {

	public List<Skills> getAllSkill();
	
	public Skills addSkill(Skills skill);
	
	public Skills updateSkill(Skills skill);

	public List<Skills> deleteSkill(int skillId);
}
