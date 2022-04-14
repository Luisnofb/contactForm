package com.maximize.contactForm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maximize.contactForm.entities.Message;

public interface MessageRepository extends JpaRepository<Message, Long>{
		
}
