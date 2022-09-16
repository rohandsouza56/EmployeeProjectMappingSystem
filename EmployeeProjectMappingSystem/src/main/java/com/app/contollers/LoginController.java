package com.app.contollers;


import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.DisabledException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.jwt.JwtTokenUtil;
import com.app.pojos.Admin;
import com.app.pojos.Employee;
import com.app.pojos.JwtResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

//	@Autowired
//	private AuthenticationManager authenticationManager;
//
//	@Autowired
//	private JwtTokenUtil jwtTokenUtil;
//
//	@Autowired
//	private UserDetailsService jwtInMemoryUserDetailsService;

//	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
//	public ResponseEntity<?> createAuthenticationToken(@RequestBody Employee employee)
//			throws Exception {
//
//		System.out.print(employee.getUserName()+"  "+employee.getPassword());
//		
//		authenticate(employee.getUserName(), employee.getPassword());
//
//		final UserDetails userDetails = jwtInMemoryUserDetailsService
//				.loadUserByUsername(employee.getUserName());
//
//		final String token = jwtTokenUtil.generateToken(userDetails);
//
//		return ResponseEntity.ok(new JwtResponse(token));
//	}
	
//	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
//	public ResponseEntity<?> createAuthenticationToken(@RequestBody Admin admin)
//			throws Exception {
//
//		System.out.print(admin.getEmail()+"  "+admin.getPassword());
//		
//		authenticate(admin.getEmail(), admin.getPassword());
//
//		final UserDetails userDetails = jwtInMemoryUserDetailsService
//				.loadUserByUsername(admin.getEmail());
//
//		final String token = jwtTokenUtil.generateToken(userDetails);
//
//		return ResponseEntity.ok(new JwtResponse(token));
//	}
//
//	private void authenticate(String email, String password) throws Exception {
//		Objects.requireNonNull(email);
//		Objects.requireNonNull(password);
//
//		try {
//			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
//		} catch (DisabledException e) {
//			throw new Exception("USER_DISABLED", e);
//		} catch (BadCredentialsException e) {
//			throw new Exception("INVALID_CREDENTIALS", e);
//		}
//	}
}
