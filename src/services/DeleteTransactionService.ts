import { response } from 'express';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsReposity from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsReposity = getCustomRepository(TransactionsReposity);

    const transaction = await transactionsReposity.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction deos not exist');
    }

    await transactionsReposity.remove(transaction);
  }
}

export default DeleteTransactionService;
