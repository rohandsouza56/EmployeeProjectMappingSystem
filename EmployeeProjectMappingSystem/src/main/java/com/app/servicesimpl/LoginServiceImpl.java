package com.app.servicesimpl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dao.EmployeeRepository;
import com.app.pojos.Employee;
import com.app.pojos.Admin;

@Service
public class LoginServiceImpl implements UserDetailsService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	AdminRepository adminRepository;
	
	
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		

		System.out.println("Email: "+email);
		Admin admin = adminRepository.findByEmail(email);
		
		Employee employee = employeeRepository.findByEmail(email);
		
		//int roleId = Integer.parseInt(email.charAt(email.length()-1)+"");
		//System.out.println("Role ID: "+roleId);
		
		//System.out.println(admin);
		//System.out.println(employee);
		
		//System.out.println(admin.getEmail()+" "+admin.getPassword());
		System.out.println();
		if (admin == null && employee==null) {
			throw new UsernameNotFoundException("User not found with username: " + email);
		}
		else if(employee == null) {
			return new org.springframework.security.core.userdetails.User(admin.getEmail(), admin.getPassword(),
					new ArrayList<>());
		}else {
			return new org.springframework.security.core.userdetails.User(employee.getEmail(), employee.getPassword(),
					new ArrayList<>());
		}
		
	}


}