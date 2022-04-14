package com.maximize.contactForm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maximize.contactForm.entities.User;

public interface UserRepository extends JpaRepository<User, String>{
		User findByEmail(String email);
}


