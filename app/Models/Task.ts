import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'

export enum Status {
  NEW = 'new',
  WORKING = 'working',
  STOPPED = 'stopped',
  FINISHED = 'finished',
}

@Entity()
export default class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  title: string

  @Column({ nullable: true, length: 500 })
  description: string

  @Column({ enum: Status, default: Status.NEW })
  status: Status

  @Column({ nullable: true })
  finished_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}
