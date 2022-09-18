package com.app.service;

import java.util.List;

import com.app.pojos.Departments;


public interface IDepartmentService {

	
	public List<Departments> getAllDepartments();
	
	public Departments addDepartments(Departments departments) ;
//
	public Departments updateDepartments(Departments departments) ;
//
	public List<Departments> deleteDepartments(int departmentId);
	
	public List<Departments> getDepartment(int projectId);
}
