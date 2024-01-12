import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import UserRole from './UserRole';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  private id!: number;

  @Column('text')
  private name: string;

  @Column('text')
  private surname: string;

  @Column('bigint')
  private cpf: string;

  @Column('text')
  private jobRole: string;

  @Column('integer')
  private level: number;

  @Column('text')
  private grade: string;

  @Column('text')
  private cashbox: string;

  @Column('boolean')
  private isSmartUser: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ESTOQUE,
  })
  private role: UserRole;

  constructor(
    name: string,
    surname: string,
    cpf: string,
    jobRole: string,
    level: number,
    grade: string,
    cashbox: string,
    isSmartUser: boolean,
    role: UserRole,
  ) {
    this.name = name;
    this.surname = surname;
    this.cpf = cpf;
    this.jobRole = jobRole;
    this.level = level;
    this.grade = grade;
    this.cashbox = cashbox;
    this.isSmartUser = isSmartUser;
    this.role = role;
  }
}
