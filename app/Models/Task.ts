import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export default class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  title: string

  @Column('text')
  description: string

  @Column()
  status: string

  @Column()
  finished_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}
