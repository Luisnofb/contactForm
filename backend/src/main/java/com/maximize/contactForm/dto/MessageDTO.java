package com.maximize.contactForm.dto;

import com.maximize.contactForm.entities.Message;


public class MessageDTO {
	private String msg;
	private String user_email;
	
	
	public MessageDTO(){
		
	}

	public MessageDTO(String msg, String user_email) {
		this.msg = msg;
		this.user_email = user_email;
	}
	
	public MessageDTO(Message message) {
		msg = message.getMsg();
		user_email = message.getUser_email();
	}


	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_id(String user_email) {
		this.user_email = user_email;
	}

	
}
