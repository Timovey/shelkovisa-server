import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import configuration from './config/index';
import dataSourceOptions from './db/index';
import { DataSource } from 'typeorm';
@Module({
	imports: [configuration, dataSourceOptions, ProductModule, AuthModule, UsersModule]
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
