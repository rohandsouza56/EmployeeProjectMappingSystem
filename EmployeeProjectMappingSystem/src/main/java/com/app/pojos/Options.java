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

@Table(name="Options")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Options {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Option_Id")
	private int optionId;
	
	@Column(name="Question_Id")
	private int QuestionId;
	
	@Column(name="Option")
	private String Option;
	
	@Column(name="isTrue")
	private boolean isTrue;
}
