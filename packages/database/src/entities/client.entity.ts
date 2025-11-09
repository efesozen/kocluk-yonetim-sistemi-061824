import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { User } from './user.entity';

@Entity({ name: 'clients' })
export class Client extends BaseEntity {


@Column({ name: 'user_id' })
  userId!: string;

  @Index('idx_clients_user_id')
  @ManyToOne('User', 'clients')
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
