package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Items;
import com.example.demo.Repository.repository1;

@Service
public class service1 {
	@Autowired
	repository1 repo;
	
	public String deletebyid(int id)
	{
		repo.deleteById(id);
		return "Deleted";
	}
	public String updatebyid(int id,Items ob)
	{
		if(repo.existsById(id))
		{
			Items obj=new Items();
			obj.setId(ob.getId());
			obj.setBrand(ob.getBrand());
			obj.setCategory(ob.getCategory());
			obj.setCost(ob.getCost());
			obj.setCount(ob.getCount());
			obj.setName(ob.getName());
			repo.save(obj);
			return "Updated";
		}
		else
		{
			return "Id doeent exist";
		}
	}
}
