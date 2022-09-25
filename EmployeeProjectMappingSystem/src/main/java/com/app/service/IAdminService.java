package com.app.service;

import com.app.pojos.Admin;

public interface IAdminService {
	public Admin addAdmin(Admin admin) ;
	
	public Admin getAdmin(String email);
}
