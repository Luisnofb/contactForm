package com.maximize.contactForm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.maximize.contactForm.dto.MessageDTO;
import com.maximize.contactForm.entities.Message;
import com.maximize.contactForm.repositories.MessageRepository;

@Service
public class MessageService {
	@Autowired
	private MessageRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MessageDTO> findAll(Pageable pageable) {
		Page <Message> result = repository.findAll(pageable);
		Page<MessageDTO> page = result.map(x -> new MessageDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MessageDTO findById(Long id) {
		Message result = repository.findById(id).get();
		MessageDTO dto = new MessageDTO(result);
		return dto;
	}
}
