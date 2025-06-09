import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @ManyToOne(() => Category, (category) => category.courses)
  category: Category;

  @Column()
  image_id: number;

  @Column()
  course_name: string;

  @Column({ type: 'bytea' })
  course_image: Buffer;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 8, scale: 2 })
  price: number;

  @Column()
  status: string;

  @Column()
  priority: number;
}
