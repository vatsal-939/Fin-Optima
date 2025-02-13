package com.example.Bankapp.Service;

import com.example.Bankapp.Repository.UserRepository;
import com.example.Bankapp.entities.User;
import com.example.Bankapp.jwtutil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class Userservice {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private jwtutil jwtService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return jwtService.generateToken(savedUser);
    }

    public String loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return jwtService.generateToken(user);
        }
        return null;
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User findUserByEmail(String email) {
        User userOptional = userRepository.findByEmail(email);
        return userOptional; // Returns the user if present, otherwise null
    }

    public User findUserById(Long id) throws Exception {
        return userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found with id: " + id));
    }
}