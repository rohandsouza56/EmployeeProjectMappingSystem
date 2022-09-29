package com.app.servicesimpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.DepartmentsRepository;
import com.app.dao.ProjectsRepository;
import com.app.pojos.Departments;
import com.app.pojos.Projects;
import com.app.service.IDepartmentService;



@Service
public class DepartmentServiceImpl implements IDepartmentService {

	@Autowired
	DepartmentsRepository departmentsRepository;
	
	@Autowired
	ProjectsRepository projectsRepository;
	
	@Override
	public List<Departments> getAllDepartments() {
		
		return departmentsRepository.findAll();
	}
/*
	@Override
	public Departments addDepartments(Departments departments) {
		// TODO Auto-generated method stub
		return departmentsRepository.save(departments);
	}

	*/
	
	@Transactional
	@Override
	public Departments addDepartments(Departments departments) {
		Projects project = projectsRepository.findById(departments.getProjects().getProjectId())
				.orElseThrow(() -> new ResourceNotFoundException("project with id: " + departments.getProjects().getProjectId() + " not found."));
		departments.setProjects(project);
		
		
		return departmentsRepository.save(departments);
	}
	
	

	@Override
	@Transactional
	public Departments updateDepartments(Departments departments) {
		Projects project = projectsRepository.findById(departments.getProjects().getProjectId())
				.orElseThrow(() -> new ResourceNotFoundException("project with id: " + departments.getProjects().getProjectId() + " not found."));
		departments.setProjects(project);
		return departmentsRepository.save(departments);
	}

	@Override
	@Transactional
	public List<Departments> deleteDepartments(int departmentId) {
		System.out.println(departmentId);
		Departments department = departmentsRepository.findById(departmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Department Not Found with Department ID : " + departmentId));
		System.out.println(department.getName());
		System.out.println(department.getProjects().getLocation());
		departmentsRepository.delete(department);
		
		return departmentsRepository.findAll();
	}
	
	@Override
	public List<Departments> getDepartment(int projectId) {
		Projects project = projectsRepository.findById(projectId)
				.orElseThrow(() -> new ResourceNotFoundException("project with id: " + projectId + " not found."));
		
		return departmentsRepository.findByProjectId(projectId);
	}
	

}
