package com.app.pojos;

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
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="Quiz")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Question_Id")
	private int questionId;
	

	@ManyToOne( cascade = CascadeType.ALL)
	@JoinColumn(name="technologyId")
	private Technology technology;
	
	@Column(name="Question")
	private String question;
	
	
	@OneToMany(mappedBy="quiz")
	private List<Options> options;
	
}
