package com.app.pojos;


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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Table(name="Roles")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Roles {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Role_Id")
	private int roleId;
	
	@Column(name="Role_Name")
	private String roleName;
	
	@OneToMany(mappedBy="roles",cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@JsonIgnore
	@ToString.Exclude
	Set<Employee> employee;
	
	@OneToMany(mappedBy="roles",cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@JsonIgnore
	@ToString.Exclude
	Set<Admin> admin;
}
