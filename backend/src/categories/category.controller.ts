import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
      constructor(private readonly categoryService: CategoryService) {}
    
      @Get()
      findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
      }
    
      @Post()
      create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.create(createCategoryDto);
      }
}
