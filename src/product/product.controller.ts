import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {
	@Get(':id')
	getOne(@Param('id') id: number): number {
		return id;
	}

	@Get()
	getList(): [] {
		return [];
	}
}
