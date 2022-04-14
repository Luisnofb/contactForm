package com.maximize.contactForm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maximize.contactForm.dto.UserDTO;
import com.maximize.contactForm.services.UserService;

@RestController
@RequestMapping(value = "/save")
public class UserController {
	
	@Autowired
	private UserService uservice;
	
	

	@PutMapping
	public UserDTO SaveUser(@RequestBody UserDTO dto){
		return uservice.saveUser(dto);
	}
	
}
