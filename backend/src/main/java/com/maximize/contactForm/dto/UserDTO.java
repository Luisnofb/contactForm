package com.maximize.contactForm.dto;


import com.maximize.contactForm.entities.User;

public class UserDTO {
	private String name;
	private String company;
	private String email;
	private String telephone;
	
	public UserDTO() {
		
	}
	
	
	public UserDTO(String name, String company, String email, String telephone) {
		this.name = name;
		this.company = company;
		this.email = email;
		this.telephone = telephone;
	}


	public UserDTO(User user) {
		name = user.getName();
	    company = user.getCompany();
		email = user.getEmail();
		telephone = user.getTelephone();
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

}
