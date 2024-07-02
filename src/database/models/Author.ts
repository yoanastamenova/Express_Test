import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Author extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: Number

    @Column({ name: 'name'})
    name!: string

    @Column({name: 'nationality'})
    nationality!: string
    
}
