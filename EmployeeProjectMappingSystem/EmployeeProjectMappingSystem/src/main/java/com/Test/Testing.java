package com.Test;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.QuizRepository;
import com.app.pojos.Options;
import com.app.pojos.Question;

public class Testing {

	@Autowired
	private QuizRepository q11;
	
	public void addQuestion() {
		Question q=new Question();
		
		 String a = "Is java Platform independent??"; 
		q.setQuestion(a);
		List<Options> o1=new ArrayList<Options>();
		Options o11=new Options(1,q,"yes",true);
		Options o22=new Options(2,q,"no",false);
		o1.add(o11);
		o1.add(o22);
		q.setOptions(o1);
		
		if(q11!=null) {
		q11.save(q);
		System.out.print("ok");
		}else {System.out.print("null pointer");}
		
	}
	
}
