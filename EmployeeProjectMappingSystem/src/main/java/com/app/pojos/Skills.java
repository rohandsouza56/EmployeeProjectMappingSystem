package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Table(name="Skills")
@Entity
@Data
@EqualsAndHashCode(exclude = "technologyId") 
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
	@JsonBackReference
	@JoinColumn(name="Employee_Id")
	private Employee employee;
	
	@Column(name="Date_Of_Completion")
	private LocalDate dateOfCompletion;
	
	@Column(name="Certification_Link")
	private String certificationLink;
	
	@Lob
	@Column(name="Certificate_Pdf")
	private byte[] certificatePdf;
	
	private String docName;
	
	private String docType;

	/****check cascade type */
	@OneToOne(cascade = CascadeType.PERSIST)
	@ToString.Exclude
	@JoinColumn(name = "Technology_Id") //fk
	private Technology technologyId;
	
	public Skills(String docName, String docType, byte[] certificatePdf) {
		super();
		this.certificatePdf = certificatePdf;
		this.docName = docName;
		this.docType = docType;
	}

}
