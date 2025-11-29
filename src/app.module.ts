/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './features/products/products.module';
import { UserModule } from './features/user/user.module';
import { PurchaseModule } from './features/purchase/purchase.module';
import { SalesModule } from './features/sales/sales.module';
import { ExpenseModule } from './features/expenses/expense.module';
import { AccountsModule } from './features/Accounts/accounts.module';

@Module({
  imports: [
    UserModule,
    ProductsModule,
    PurchaseModule,
    SalesModule,
    ExpenseModule,
    AccountsModule,
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
  ],

  providers: [],
  controllers: [],
})
export class AppModule {}
// test
