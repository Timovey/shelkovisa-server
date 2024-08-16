import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/Product';

export default TypeOrmModule.forRoot({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: ['dist/db/entities/*{.ts,.js}'],
	migrations: ['dist/db/migrations/*{.ts,.js}'],
	autoLoadEntities: true,
	synchronize: false
});
