import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/entities/course.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { CategoriesModule } from './categories/category.module';
import { Category } from './categories/entities/category.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'online_courses',
      entities: [Course,User,Role,Category],
      synchronize: true, // Set to false in production
    }),
    CoursesModule,
    UsersModule,
    RolesModule,
    CategoriesModule,
  ],
})
export class AppModule {}
