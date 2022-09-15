package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Technology;

public interface TechnologyRepository  extends JpaRepository<Technology,Integer> {

}
