import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("authors")    // include the name of the table which was migrated inside entitiy
export class Author extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: Number

    @Column({ name: 'name'})
    name!: string

    @Column({name: 'nationality'})
    nationality!: string
    
}
