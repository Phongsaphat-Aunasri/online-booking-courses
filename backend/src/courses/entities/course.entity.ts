import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column()
  category_id: number;

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
