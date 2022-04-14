package com.maximize.contactForm.dto;

import com.maximize.contactForm.entities.Message;

public class MessageDTO {
	private String msg;
	private Long user_id;
	
	
	public MessageDTO(){
		
	}

	public MessageDTO(String msg, Long user_id) {
		this.msg = msg;
		this.user_id = user_id;
	}
	
	public MessageDTO(Message message) {
		msg = message.getMsg();
		user_id = message.getUserID();
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
