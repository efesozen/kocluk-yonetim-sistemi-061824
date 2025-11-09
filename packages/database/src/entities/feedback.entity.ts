import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { Session } from './session.entity';

@Entity({ name: 'feedbacks' })
export class Feedback extends BaseEntity {
  @Column({ type: 'integer' })
  @Index('idx_feedbacks_rating')
  rating!: number;

  @Column({ nullable: true })
  comment?: string;


@Column({ name: 'session_id' })
  sessionId!: string;

  @Index('idx_feedbacks_session_id')
  @ManyToOne('Session', 'feedbacks')
  @JoinColumn({ name: 'session_id' })
  session!: Session;
}
