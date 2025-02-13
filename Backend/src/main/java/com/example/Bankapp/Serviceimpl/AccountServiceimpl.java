package com.example.Bankapp.Serviceimpl;
import com.example.Bankapp.Repository.AccountRepository;
import com.example.Bankapp.Repository.UserRepository;
import com.example.Bankapp.Service.AccountService;

import com.example.Bankapp.entities.Account;

import com.example.Bankapp.entities.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class AccountServiceimpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private UserRepository userRepository;



    @Override
    public Account createAccount(Account account) {
        User user = userRepository.findById(account.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + account.getUser().getId()));
        account.setUser(user);
        return accountRepository.save(account);
    }

    @Override
    public Account getAccountById(Long accountId) {
        return accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found with ID: " + accountId));
    }

    @Override
    public List<Account> getAccountsByCustomerId(Long customerId) {
        return accountRepository.findByUser_id(customerId);
    }

    @Override
    public Account updateBalance(Long accountId, BigDecimal newBalance) {
        Account account = getAccountById(accountId);
        account.setBalance(newBalance);
        return accountRepository.save(account);
    }

    @Override
    public void deleteAccount(Long accountId) {
        if (!accountRepository.existsById(accountId)) {
            throw new RuntimeException("Account not found with ID: " + accountId);
        }
        getAccountById(accountId);
        accountRepository.deleteById(accountId);
    }
}
