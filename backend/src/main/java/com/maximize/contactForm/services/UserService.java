package com.maximize.contactForm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.maximize.contactForm.dto.UserDTO;
import com.maximize.contactForm.entities.User;
import com.maximize.contactForm.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
	
	
	@Transactional
	public UserDTO saveUser(UserDTO dto) {
		User user = repository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setName(dto.getName());
			user.setCompany(dto.getCompany());
			user.setEmail(dto.getEmail());
			user.setTelephone(dto.getTelephone());
			user = repository.save(user);
		}
		return new UserDTO(user);
	}
	
}
