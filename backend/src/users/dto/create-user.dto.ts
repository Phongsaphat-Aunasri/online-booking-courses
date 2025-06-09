import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  role_id: number;

  @IsNotEmpty()
  fname: string;

  @IsNotEmpty()
  lname: string;

  @IsNotEmpty()
  @Length(10, 10)
  phone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  status: string;
}
