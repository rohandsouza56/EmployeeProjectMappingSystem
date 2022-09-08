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

@Table(name="Departments")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Departments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Department_Id")
	private int departmentId;
	
	@ManyToOne( cascade = CascadeType.ALL)
	@JoinColumn(name="Project_Id")
	private Projects projects;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Current_Strength")
	private int currentStrength;
	
	@Column(name="Maximum_Strength")
	private int maximumStrength;
}
