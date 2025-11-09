import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateFeedbackDto {
  @IsUUID()
  sessionId!: string;

  @IsNumber()
  rating!: number;

  @IsOptional()
  @IsString()
  comment?: string;
}

export class UpdateFeedbackDto {
  @IsOptional()
  @IsUUID()
  sessionId?: string | undefined;

  @IsOptional()
  @IsNumber()
  rating?: number | undefined;

  @IsOptional()
  @IsOptional()
  @IsString()
  comment?: string | undefined;
}

export class FeedbackResponseDto {
  id!: string;
  sessionId!: string;
  rating!: number;
  comment?: string;
  createdAt!: Date;
  updatedAt!: Date;
}
