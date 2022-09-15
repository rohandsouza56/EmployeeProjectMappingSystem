package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.SkillsRepository;
import com.app.pojos.Skills;
import com.app.service.ISkillService;



@Service
public class SkillServiceImpl implements ISkillService {

	@Autowired
	SkillsRepository skillRepository;
	
	@Override
	public List<Skills> getAllSkill() {
		
		return skillRepository.findAll();
	}
	

	@Override
	public Skills addSkill(Skills skill) {
	
		return skillRepository.save(skill);
	}
	
	

	@Override
	public Skills updateSkill(Skills skill) {
//		if(!skillRepository.existsById(skill.getSkillsId())) {
//			 throw new ResourceNotFoundException("Skills Not Found with Projet Id : " +skill.getSkillsId());
//		 }
//	
		return skillRepository.save(skill);
	}

	@Override
	public List<Skills> deleteSkill(int skillId) {
		Skills skill = skillRepository.findById(skillId)
				.orElseThrow(() -> new ResourceNotFoundException("Skills Not Found with ID : " + skillId));
		
		
		System.out.println(skill);
		skillRepository.delete(skill);
		
		return skillRepository.findAll();
	}
}
