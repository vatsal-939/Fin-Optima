package com.example.Bankapp.Serviceimpl;


import com.example.Bankapp.Repository.AccountRepository;
import com.example.Bankapp.Repository.TransactionRepository;
import com.example.Bankapp.Service.TransactionService;
import com.example.Bankapp.entities.Account;
import com.example.Bankapp.entities.Transaction;
import com.example.Bankapp.entities.TransactionType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionServiceimpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Transaction createTransaction(Transaction transaction) {
        if (transaction.getAccount() == null || transaction.getAccount().getAccountId() == null) {
            throw new RuntimeException("Account information is missing");
        }

        // Fetch the associated account from the database
        Account account = accountRepository.findById(transaction.getAccount().getAccountId())
                .orElseThrow(() -> new RuntimeException("Account not found"));

        // Update account balance based on transaction type
        if (transaction.getTransactionType() == TransactionType.CREDIT) {
            account.setBalance(account.getBalance().add(transaction.getAmount()));
        } else if (transaction.getTransactionType() == TransactionType.DEBIT) {
            if (account.getBalance().compareTo(transaction.getAmount()) < 0) {
                throw new RuntimeException("Insufficient balance for the transaction");
            }
            account.setBalance(account.getBalance().subtract(transaction.getAmount()));
        } else {
            throw new RuntimeException("Invalid transaction type");
        }

        // Save updated account balance
        accountRepository.save(account);

        // Set transaction date and associate it with the account
        transaction.setTransactionDate(LocalDateTime.now());
        transaction.setAccount(account);

        // Save and return the transaction
        return transactionRepository.save(transaction);
    }


    @Override
    public Transaction getTransactionById(Long transactionId) {
        return transactionRepository.findById(transactionId)
                .orElseThrow(() -> new RuntimeException("Transaction not found with ID: " + transactionId));
    }

    @Override
    public List<Transaction> getTransactionsByAccountId(Long accountId) {
        return transactionRepository.findByAccount_AccountId(accountId);
    }
}
