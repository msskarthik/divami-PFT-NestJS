// src/transactions/transactions.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.schema';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() transactionData: Partial<Transaction>) {
    return this.transactionsService.create(transactionData);
  }

  @Get()
  findAll(@Query('userId') userId: string) {
    return this.transactionsService.findAll(userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Transaction>) {
    return this.transactionsService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transactionsService.delete(id);
  }

  @Get('summary')
  async getMonthlySummary(@Query('userId') userId: string) {
    return this.transactionsService.getMonthlySummary(userId);
  }
}
