import { isDate, IsEmail, IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';


export  class UserDto {

  @IsNotEmpty()
  @IsNumber()
  id:number;

  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email:string;

  @IsDate()
  birthDate:Date;
}