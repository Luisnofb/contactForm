package com.maximize.contactForm.dto;

import com.maximize.contactForm.entities.Message;

public class MessageDTO {
	private Long id;
	private String msg;
	private Long user_id;
	
	public MessageDTO(){
		
	}

	public MessageDTO(Long id, String msg, Long user_id) {
		this.id = id;
		this.msg = msg;
		this.user_id = user_id;
	}
	
	public MessageDTO(Message message) {
		id = message.getId();
		msg = message.getMsg();
		user_id = message.getUserID();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	

	
	
	
}
