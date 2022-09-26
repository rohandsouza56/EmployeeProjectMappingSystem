package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Admin;
import com.app.pojos.Skills;

public interface SkillsRepository extends JpaRepository<Skills, Integer> {

	
	@Query("SELECT s FROM Skills s WHERE s.employee.employeeId = ?1")
	public List<Skills> findAllEmployeeSkills(int employeeId);
}
