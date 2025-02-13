package com.example.Bankapp.Service;



import com.example.Bankapp.entities.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Transaction transaction);

    Transaction getTransactionById(Long transactionId);

    List<Transaction> getTransactionsByAccountId(Long accountId);
}
