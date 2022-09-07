package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Quiez")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Quiez {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Question_Id")
	private int questionId;
	
	@Column(name="Technology_Id")
	private int technologyId;
	
	@Column(name="Question")
	private String question;
	
}
