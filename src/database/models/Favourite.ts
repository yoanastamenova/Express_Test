import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity("favourites")
export class Favourite extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'user_id' })
    user_id!: Number

    @Column({ name: 'book_id' })
    book_id!: Number

    @ManyToOne(() => User, user => user.favourite_books)
    @JoinColumn({name: "user_id"})
    user!: User
}