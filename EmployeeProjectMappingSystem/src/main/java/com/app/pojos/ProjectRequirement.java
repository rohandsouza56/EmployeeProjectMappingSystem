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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Project_Requirement")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequirement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Requirement_Id")
	private int requirementId;
	
	
	@ManyToOne( cascade = CascadeType.ALL)
	@JoinColumn(name="Project_Id")
	private Projects projects;

	@Column(name="Project_Name")
	private String name;

}
