package com.qa.ams;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<User> getAllAccounts(){

         userRepository.findAll();
        return userRepository.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public List<User> create(@RequestBody User user){
        userRepository.save(user);

        return  userRepository.findAll();

    }

    @DeleteMapping(path = "/delete/{id}")
    public @ResponseBody String delete(@PathVariable long id){
        userRepository.deleteById(id);


        return  "Deleted user";

    }

    @RequestMapping(value = "/edit/{id}", method = RequestMethod.PUT)
    public List<User> edit(@PathVariable long id, @RequestBody User user){

        userRepository.save(user);

        return  userRepository.findAll();


    }

}
