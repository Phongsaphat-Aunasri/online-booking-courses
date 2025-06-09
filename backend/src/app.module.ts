import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'online_courses',
      entities: [Course],
      synchronize: true, // Set to false in production
    }),
    CoursesModule,
  ],
})
export class AppModule {}
