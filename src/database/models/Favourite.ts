import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Book } from "./Book"

@Entity("favourites")
export class Favourite extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'user_id' })
    user_id!: number

    @Column({ name: 'book_id' })
    book_id!: number

    @ManyToOne(() => User, user => user.favourite_books)
    @JoinColumn({name: "user_id"})
    user!: User

    @ManyToOne(() => Book, book => book.book_favs)
    @JoinColumn({name: 'book_favs'})
    book!: Book
}