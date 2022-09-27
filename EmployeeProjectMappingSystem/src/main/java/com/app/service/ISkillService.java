package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Skills;

public interface ISkillService {

	public List<Skills> getAllSkill();
	
	public Skills addSkill(Skills skill);
	
	public Skills updateSkill(Skills skill);

	public List<Skills> deleteSkill(int skillId);
	
	public List<Skills> getAllEmployeeSkills(int employeeId);
	
	public Skills saveCertificatePdf(int employeeId,Skills skill,MultipartFile certificatePdf);
	
	public Skills saveCertificatePdf(MultipartFile file);
	

}
