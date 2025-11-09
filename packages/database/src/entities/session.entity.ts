import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { Client } from './client.entity';
import type { User } from './user.entity';

@Entity({ name: 'sessions' })
export class Session extends BaseEntity {
  @Column({ type: 'timestamp with time zone', name: 'scheduled_at' })
  @Index('idx_sessions_scheduled_at')
  scheduledAt!: Date;

  @Column({ type: 'integer' })
  duration!: number;

  @Column({ type: 'jsonb', nullable: true })
  notes?: Record<string, unknown>;


@Column({ name: 'client_id' })
  clientId!: string;

  @Index('idx_sessions_client_id')
  @ManyToOne('Client', 'sessions')
  @JoinColumn({ name: 'client_id' })
  client!: Client;

  @Column({ name: 'coach_id' })
  coachId!: string;

  @Index('idx_sessions_coach_id')
  @ManyToOne('User', 'sessions')
  @JoinColumn({ name: 'coach_id' })
  user!: User;
}
