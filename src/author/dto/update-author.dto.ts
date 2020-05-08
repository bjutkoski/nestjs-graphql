import { IsString, IsOptional } from 'class-validator';

export class UpdateAuthorDTO {
  @IsOptional()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
}
