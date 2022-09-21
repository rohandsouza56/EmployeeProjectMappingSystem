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
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Table(name="Projects")
@Entity
@Data
@EqualsAndHashCode(exclude = "departments,projectRequirement") 
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
	
//	@Fetch(value = FetchMode.SUBSELECT)
	@OneToMany(mappedBy="projects",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonManagedReference
	@ToString.Exclude
	Set<Departments> departments;
	

	@OneToMany(mappedBy="projects",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonManagedReference
	@ToString.Exclude
	Set<ProjectRequirement> projectRequirement;
	

	
	
}
