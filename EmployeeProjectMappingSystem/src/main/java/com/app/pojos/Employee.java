package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Employee")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

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
	
	@Column(name="Pan_No")
	private String panNo;
	
	@Column(name="Gender")
	private String gender;

	@Column(name="User_Name")
	private String userName;
	
	@Column(name="Password")
	private String password;
	
	@OneToOne
	@Column(name="Project_Id")
	private Projects projects;
	
	@OneToOne
	@Column(name="Department_Id")
	private Departments depertments;
	
	@Column(name="Is_Manager")
	private int isManager;
	
	@Column(name="Manager_Id")
	private int managerId;
	
	/*
	private int skillId;
*/
	@OneToMany(mappedBy="quiz")
	private List<Skills> skills;
	
	@Column(name="Resume")
	private String Resume;
	
	@Column(name="Is_Tagged")
	private int isTagged;
}
