package com.maximize.contactForm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maximize.contactForm.entities.Message;

public interface MsgRepository extends JpaRepository<Message, String>{
		Message findByMsg(String msg);
}


