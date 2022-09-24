package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Table(name="Question")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Question_Id")
	private int questionId;
	

	@ManyToOne
	@JoinColumn(name="Technology_Id")
	private Technology technology;
	
	@Column(name="Question")
	private String question;
	
	@Column(name="marks")
	private int marks;
	
	
	
	@OneToMany(mappedBy="question" ,fetch=FetchType.EAGER)
	@JsonManagedReference
	@ToString.Exclude
	private List<Options> options;
	
}
