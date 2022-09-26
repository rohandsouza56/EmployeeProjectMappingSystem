package com.app.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.EmployeeRepository;
import com.app.dao.SkillsRepository;
import com.app.pojos.Employee;
import com.app.pojos.Projects;
import com.app.pojos.Skills;
import com.app.service.IEmployeeService;
import com.app.service.ISkillService;



@Service
public class SkillServiceImpl implements ISkillService {

	@Autowired
	SkillsRepository skillRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public List<Skills> getAllSkill() {
		
		return skillRepository.findAll();
	}
	
	@Override
	public List<Skills> getAllEmployeeSkills(int employeeId) {
//		Employee employee = employeeRepository.findById(employeeId)
//				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employeeId));
		
		return skillRepository.findAllEmployeeSkills(employeeId);
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
	
	@Override
	public Skills saveCertificatePdf(int employeeId,Skills skill,MultipartFile file) {
		
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with Employee ID : " + employeeId));
		
		skill.setEmployee(employee);
		
		  String docname = file.getOriginalFilename();
		  try {
		//	  Employee employee = new Employee(docname,file.getContentType(),file.getBytes());
			 // employee.setDocName(docname.);
			  skill.setCertificatePdf(file.getBytes());
			  return skillRepository.save(skill);
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
		return null;
	}
	
	@Override
	public Skills saveCertificatePdf(MultipartFile file) {
		
		  String docname = file.getOriginalFilename();
		  try {
			  Skills skill = new Skills(docname,file.getContentType(),file.getBytes());
			 // employee.setDocName(docname.);
			  skill.setCertificatePdf(file.getBytes());
			  return skillRepository.save(skill);
		  }
		  catch(Exception e) {
			  e.printStackTrace();
		  }
		return null;
	}
}
