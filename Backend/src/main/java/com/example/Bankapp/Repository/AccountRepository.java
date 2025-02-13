package com.example.Bankapp.Repository;

import com.example.Bankapp.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByUser_id(Long userId);
}
