package com.app.pojos;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Table(name="Departments")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Departments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Department_Id")
	private int departmentId;
	
	@ManyToOne
	@JoinColumn(name="Project_Id")
	private Projects projects1;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Current_Strength")
	private int currentStrength;
	
	@Column(name="Maximum_Strength")
	private int maximumStrength;
}
