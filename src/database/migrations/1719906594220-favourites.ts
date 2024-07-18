import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Favourites1719906594220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "favourites",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "user_id",
                        type: "int"
                    },
                    {
                        name: "book_id",
                        type: "int"
                    }
                ], 
                foreignKeys: [
                    {
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'users'
                    },
                    {
                        columnNames: ['book_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'books'
                    }
                ],
                uniques: [
                    new TableUnique({
                        name: "user_book_unique",
                        columnNames: ["user_id", "book_id"],
                    }),
                ],
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('favourites')
    }

}