import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  role_id: number;

  @Column({ length: 255 })
  fname: string;

  @Column({ length: 255 })
  lname: string;

  @Column({ length: 10 })
  phone: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column({ length: 255 })
  status: string;
    @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
