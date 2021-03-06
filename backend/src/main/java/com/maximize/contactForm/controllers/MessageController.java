package com.maximize.contactForm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maximize.contactForm.dto.MessageDTO;
import com.maximize.contactForm.services.MessageService;

@RestController
@RequestMapping(value = "/message")
public class MessageController {
	
	@Autowired
	private MessageService service;
	
	@GetMapping
	public Page<MessageDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public MessageDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
	
}
