package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Departments;

public interface DepartmentsRepository extends JpaRepository<Departments,Integer>{

}
