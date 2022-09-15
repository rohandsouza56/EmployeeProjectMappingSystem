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

import com.app.dao.EmployeeRepository;
import com.app.pojos.Employee;

@Service
public class LoginServiceImpl implements UserDetailsService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
//		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//		employee.setPassword(passwordEncoder.encode(p));
//		Employee employee = employeeRepository.findEmployeeByUsernameAndPassword(username, username)
		
//		if ("abc".equals(username)) {
//			return new User("abc", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//					new ArrayList<>());
//		} else {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}
		
		Employee employee = employeeRepository.findByUsername(username);
		System.out.println(employee.getUserName()+" "+employee.getPassword());
		System.out.println();
		if (employee == null) {
			throw new UsernameNotFoundException("Employee not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(employee.getUserName(), employee.getPassword(),
				new ArrayList<>());
	}

}