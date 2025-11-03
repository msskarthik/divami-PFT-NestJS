import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() dto: any) {
    return this.budgetService.create(dto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.budgetService.findAll(userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.budgetService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(id);
  }
}
