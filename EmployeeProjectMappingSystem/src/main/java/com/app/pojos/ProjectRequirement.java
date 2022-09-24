package com.app.pojos;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Table(name="Project_Requirment")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequirement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Requirement_Id")
	private int requirementId;
	
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="Project_Id")
	private Projects projects;
	
	
	@ManyToOne
	//@JsonBackReference
	@JoinColumn(name="Technology_Id")
	private Technology technology;
	
//	@Column(name="Technology_Id")
//	private int technology;

}
