package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Departments;
import com.app.pojos.Employee;

public interface DepartmentsRepository extends JpaRepository<Departments,Integer>{

	@Query("SELECT d FROM Departments d WHERE d.projects.projectId = ?1")
	public List<Departments> findByProjectId(int projectId);
}
