package com.example.demo.modal;
import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;

import com.example.demo.user.domain.UserRole;
//import com.fasterxml.jackson.annotation.JsonIgnore;

//import jakarta.persistence.CascadeType;
//import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
//import jakarta.persistence.ElementCollection;
//import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fullname")
    private String fullname;
    

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;
    
    
    private String mobile;

    private LocalDateTime createdAt;
    
    public User() {
		
	}

	public User(Long id, String fullName, String password, String email, String mobile,
			 LocalDateTime createdAt) {
		super();
		this.id = id;
		this.fullname = fullName;
		this.password = password;
		this.email = email;
		this.mobile = mobile;
		
		this.createdAt = createdAt;
	}

	

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullname;
	}

	public void setFullName(String fullName) {
		this.fullname = fullName;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
    
}
