package com.app.servicesimpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminRepository;
import com.app.pojos.Admin;
import com.app.pojos.Projects;
import com.app.service.IAdminService;

@Service
public class AdminServiceImpl implements IAdminService {

	@Autowired
	AdminRepository adminRepository;
	
	@Transactional
	@Override
	public Admin addAdmin(Admin admin) {	
//		BCryptPasswordEncoder bcryptEncoder =new BCryptPasswordEncoder();
//		admin.setPassword(bcryptEncoder.encode(admin.getPassword()));
		return adminRepository.save(admin);
	}

}
