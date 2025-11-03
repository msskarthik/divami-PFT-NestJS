import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Budget } from './budget.schema';

@Injectable()
export class BudgetService {
  constructor(@InjectModel(Budget.name) private budgetModel: Model<Budget>) {}

  async create(dto: any) {
    const budget = new this.budgetModel(dto);
    return budget.save();
  }

  async findAll(userId: string) {
    return this.budgetModel.find({ userId });
  }

  async update(id: string, dto: any) {
    return this.budgetModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string) {
    return this.budgetModel.findByIdAndDelete(id);
  }
}
