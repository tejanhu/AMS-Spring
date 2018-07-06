package com.qa.ams.Controllers;

import com.qa.ams.Entity.User;
import com.qa.ams.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<User> getAllAccounts(){

         userRepository.findAll();
        return userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public List<User> create(@RequestBody User user){
        userRepository.save(user);

        return  userRepository.findAll();

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/delete/{id}")
    public @ResponseBody String delete(@PathVariable long id){
        userRepository.deleteById(id);


        return  "Deleted user";

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/edit/{id}", method = RequestMethod.PUT)
    public List<User> edit(@PathVariable long id, @RequestBody User user){

        userRepository.save(user);

        return  userRepository.findAll();


    }

}
