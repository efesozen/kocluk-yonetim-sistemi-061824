import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateClientDto {
  @IsUUID()
  userId!: string;
}

export class UpdateClientDto {
  @IsOptional()
  @IsUUID()
  userId?: string | undefined;
}

export class ClientResponseDto {
  id!: string;
  userId!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
