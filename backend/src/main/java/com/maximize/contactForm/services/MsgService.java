package com.maximize.contactForm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.maximize.contactForm.dto.MessageDTO;
import com.maximize.contactForm.entities.Message;
import com.maximize.contactForm.repositories.MsgRepository;


@Service
public class MsgService {

	@Autowired
	private MsgRepository repository;
	

	@Transactional
	public MessageDTO saveMessage(MessageDTO dto) {
		Message message = repository.findByMsg(dto.getMsg());
		if (message == null) {
			message = new Message();
			message.setMsg(dto.getMsg());
			message.setUser_email(dto.getUser_email());
			message = repository.save(message);	
		}
		
		return new MessageDTO(message);
	}
}
