import { Controller, Get } from '@nestjs/common';
import { CourseService } from './courses.service';
import { Course } from './entities/course.entity';

@Controller('courses') // <-- this registers the /courses route
export class CoursesController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }
}
