import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
@Injectable()
export class CategoryService {
    constructor(
    @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
      ) {}
    
      findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
      }
    
      create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = this.categoryRepository.create(createCategoryDto);
        return this.categoryRepository.save(category);
      }
}
