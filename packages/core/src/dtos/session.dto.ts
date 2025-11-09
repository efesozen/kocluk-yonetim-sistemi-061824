import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateSessionDto {
  @IsUUID()
  clientId!: string;

  @IsUUID()
  coachId!: string;

  @IsDate()
  scheduledAt!: Date;

  @IsNumber()
  duration!: number;

  @IsOptional()
  notes?: Record<string, unknown>;
}

export class UpdateSessionDto {
  @IsOptional()
  @IsUUID()
  clientId?: string | undefined;

  @IsOptional()
  @IsUUID()
  coachId?: string | undefined;

  @IsOptional()
  @IsDate()
  scheduledAt?: Date | undefined;

  @IsOptional()
  @IsNumber()
  duration?: number | undefined;

  @IsOptional()
  @IsOptional()
  notes?: Record<string, unknown> | undefined;
}

export class SessionResponseDto {
  id!: string;
  clientId!: string;
  coachId!: string;
  scheduledAt!: Date;
  duration!: number;
  notes?: Record<string, unknown>;
  createdAt!: Date;
  updatedAt!: Date;
}
