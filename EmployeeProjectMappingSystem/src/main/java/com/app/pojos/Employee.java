package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Table(name="Employee")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee implements Serializable {

	/* Note  *** check data type of resume,isTagged and isManager   */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Employee_Id")
	private int employeeId;
	
	@Column(name="Employee_Name")
	private String employeeName;
	
	@Column(name="Designation")
	private String designation;
	
	@Column(name="DateOfJoining")
	private LocalDate dateOfJoining;
	
	@Column(name="MobileNo")
	private String mobileNo;

	@Column(name="Email")
	private String email;
	
	@Column(name="Gender")
	private String gender;

	
	@Column(name="Password")
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Project_Id")
	private Projects projects;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="Department_Id")
	private Departments departments;
	
	@OneToMany(mappedBy="employee",cascade = CascadeType.ALL)
	@JsonIgnore
	@ToString.Exclude
	private List<Skills> skills;
	
	@Column(name="Resume")
	private String Resume;
	
	@ManyToOne
	@JoinColumn(name="Roll_Id")
	private Roles roles;
}
