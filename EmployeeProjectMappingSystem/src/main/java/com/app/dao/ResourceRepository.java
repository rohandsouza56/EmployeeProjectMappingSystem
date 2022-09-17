package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Integer>{

}
