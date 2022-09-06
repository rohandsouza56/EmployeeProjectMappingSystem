package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Projects")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Projects{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
	
	//Projects p = new Projects();
	
	
}
