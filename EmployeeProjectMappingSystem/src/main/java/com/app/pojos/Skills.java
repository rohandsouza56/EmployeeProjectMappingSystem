package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Table(name="Skills")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Skills {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Skill_Id")
	private int skillId;
	
	
	
	@Column(name="Skill")
	private String skill;
	

	@ManyToOne
	@JoinColumn(name="Employee_Id")
	private Employee employee;
	
	@Column(name="Date_Of_Completion")
	private LocalDate dateOfCompletion;
	
	@Column(name="Certification_Link")
	private String certificationLink;
	
	@Column(name="Certificate_Pdf")
	private String certificatePdf;
	

	/****check cascade type */
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "Technology_Id") //fk
	private Technology technologyId;
}
