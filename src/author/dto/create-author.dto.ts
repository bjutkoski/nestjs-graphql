import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAuthorDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
}

export class UpdateAuthorDTO {
  @IsOptional()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
}
