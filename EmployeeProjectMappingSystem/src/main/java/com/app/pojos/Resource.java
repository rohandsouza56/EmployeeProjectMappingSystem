package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Resource")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Resource {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Resource_Id")
	private int resourceId;
	
	@Column(name="Description")
	private String description;
	
	@Column(name="Link")
	private String link;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "Technology_Id") //fk
	private Technology technology;
	
}
