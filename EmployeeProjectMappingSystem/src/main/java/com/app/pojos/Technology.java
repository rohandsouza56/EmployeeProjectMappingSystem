package com.app.pojos;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
	
	@OneToMany(mappedBy="technology",cascade = CascadeType.PERSIST ,fetch=FetchType.LAZY)
	@JsonIgnore
	@ToString.Exclude
	private Set<Question> question;
	
	@OneToMany(mappedBy="technology",cascade = CascadeType.PERSIST,fetch=FetchType.LAZY)
	@JsonIgnore
	@ToString.Exclude
	private Set<ProjectRequirement> projectRequirement;
	
}
