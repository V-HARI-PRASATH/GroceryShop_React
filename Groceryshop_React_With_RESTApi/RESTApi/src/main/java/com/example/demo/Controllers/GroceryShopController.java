package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Items;
import com.example.demo.Repository.repository1;
import com.example.demo.Service.service1;

@RestController
@CrossOrigin("http://localhost:3000")
public class GroceryShopController {
	@Autowired
	repository1 repo;
	@Autowired
	service1 serv;
	
	@GetMapping("/get")
	public List<Items> getall()
	{
		return repo.findAll();
	}
	@PostMapping("/post")
	public Items create(@RequestBody Items obj)
	{
		return repo.save(obj);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		return serv.deletebyid(id);
	}
	@PutMapping("/update/{id}")
	public String update(@PathVariable int id,@RequestBody Items obj)
	{
		return serv.updatebyid(id,obj);
	}
}
