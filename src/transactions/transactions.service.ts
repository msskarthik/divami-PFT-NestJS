// src/transactions/transactions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './transactions.schema';
import dayjs from 'dayjs';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
  ) {}

  async create(transactionData: Partial<Transaction>) {
    const created = new this.transactionModel(transactionData);
    return created.save();
  }

  async findAll(userId: string) {
    return this.transactionModel.find({ userId }).sort({ date: -1 });
  }

  async update(id: string, updateData: Partial<Transaction>) {
    return this.transactionModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id: string) {
    return this.transactionModel.findByIdAndDelete(id);
  }

  async getMonthlySummary(userId: string) {
    const startOfMonth = dayjs().startOf('month').toDate();
    const endOfMonth = dayjs().endOf('month').toDate();

    const transactions = await this.transactionModel.find({
      userId,
      date: { $gte: startOfMonth, $lte: endOfMonth },
    });

    const totalIncome = transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    return {
      totalIncome,
      totalExpense,
      balance,
    };
  }
}
