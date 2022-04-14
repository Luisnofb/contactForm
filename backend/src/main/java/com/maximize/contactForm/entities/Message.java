package com.maximize.contactForm.entities;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_message")
public class Message implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String msg;
	
	//association
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	

	public Message(){
		
	}
	
	public Message(Long id, String msg, User user) {
		this.id = id;
		this.msg = msg;
		this.user = user;
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

	public User getUser() {
		return user;
	}
	
	//used in MessageDTO
	public Long getUserID() {
		return user.getId();
	}
	//used in MessageService
	public void setUserID(Long id) {
		user.setId(id);
	}

	
}
