import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ActivatedUserDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  roleId: string;

  @IsNotEmpty()
  @IsString()
  roleName: string;

  @IsOptional()
  profileImage: string;
}
