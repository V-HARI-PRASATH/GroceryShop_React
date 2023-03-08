package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Items {
	@Id
	private int id;
	private String name;
	private String brand;
	private String category;
	private int count;
	private int cost;
	public Items(int id, String name, String brand, String category, int count, int cost) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.category = category;
		this.count = count;
		this.cost = cost;
	}
	public Items() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
}
