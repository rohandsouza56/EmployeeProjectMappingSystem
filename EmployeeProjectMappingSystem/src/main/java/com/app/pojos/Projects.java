package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Table(name="Projects")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Projects{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Project_Id")
	private int projectId;
	
	@Column(name="Project_Name")
	private String name;
	
	@Column(name="Description")
	private String description;
	
	@Column(name="Start_Date")
	private LocalDate startDate;
	
	@Column(name="End_Date")
	private LocalDate endDate;
	
	@Column(name="Location")
	private String location;
	
	@Column(name="Manager_Id")
	private int managerId;
	
	//@Fetch(value = FetchMode.SUBSELECT)
	@OneToMany(mappedBy="projects1",cascade = CascadeType.PERSIST ,fetch = FetchType.EAGER)
	Set<Departments> departments;
	

	@OneToMany(mappedBy="projects",cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	//@Fetch(value = FetchMode.SUBSELECT)
	Set<ProjectRequirement> projectRequirement;
	

	
	
}
