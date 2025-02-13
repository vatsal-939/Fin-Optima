package com.example.Bankapp.Service;



import com.example.Bankapp.entities.Account;

import java.math.BigDecimal;
import java.util.List;

public interface AccountService {
    Account createAccount(Account account);
    Account getAccountById(Long accountId);
    List<Account> getAccountsByCustomerId(Long customerId);
    Account updateBalance(Long accountId, BigDecimal newBalance);
    void deleteAccount(Long accountId);
}
