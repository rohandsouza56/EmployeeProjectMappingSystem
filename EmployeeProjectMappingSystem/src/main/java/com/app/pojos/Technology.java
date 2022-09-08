package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Technology")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Technology {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Technology_Id")
	private int technologyId;
	
	@Column(name="Technology_Name")
	private String technologyName;
	
	
	/****check cascade type */
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "Resource_Id") //fk
	private Resource resourceId;
	
	@OneToMany(mappedBy="technology")
	private List<Quiz> quiz;
	
}
