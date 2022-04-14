package com.maximize.contactForm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maximize.contactForm.dto.MessageDTO;
import com.maximize.contactForm.services.MsgService;

@RestController
@RequestMapping(value = "/puts")
public class MsgController {
	
	@Autowired
	private MsgService service;
	
	
	@PutMapping
	public MessageDTO SaveMessage(@RequestBody MessageDTO dto){
		return service.saveMessage(dto);
	}
}
