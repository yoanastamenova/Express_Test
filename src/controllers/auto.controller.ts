import { Request, Response } from "express";
import { Author } from "../database/models/Author";

export const createAuthor = async (req: Request, res: Response) => {
    try {
        //1. Recuperar la informacion de la req
        const name = req.body.name;
        const nationality = req.body.nationality;

        //2. Validar informacion
        if (!name) {
            return res.status(400).json(
                {
                    success: false,
                    message: "name is required"
                }
            )
        }

        if (!nationality) {
            return res.status(400).json(
                {
                    success: false,
                    message: "nationality is required"
                }
            )
        }

        //3. Tratar informacion

        //4. Atacar la bd
        const newAuthor = await Author.create(
            {
                name: name,
                nationality: nationality
            }
        ).save();

        //5. Responder

        res.json(
            {
                success: true,
                message: 'Author created successfully',
                data: newAuthor
            }
        )
    }
    catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error creating author"
            }
        )
    }
}

export const getAllAuthors = async (req: Request, res: Response) => {
    try {
        //1. Recuperar info de BD
        const authors = await Author.find()

        //2. Responder la info 
        res.json(
            {
                success: true,
                message: "All authors retrived successfully",
                data: authors
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Cannot retrive authors",
                error: error
            }
        )
    }
}
export const updateAuthorById = async (req: Request, res: Response) => {
    try {
        // 1. Recupera la info
        const authorIdToUpdate = req.params.id
        const body = req.body

        //2. Validar la info

        // (recuerda del ejemplo de la contrasena que no puedes usar la misma)

        //3. Tratar la info si hace falta

        //4. Guardar la info en la BD
       const authorUpdated = await Author.update(
            {
                id: parseInt(authorIdToUpdate)
            },
            body
        )

        //5. Devolver respuesta
        res.status(200).json(
            {
                success: true,
                message: "Author updated",
                data: authorUpdated
            }
        )

    } catch(error) {
        res.status(500).json(
            {
                success: false,
                message: "Author cannot be updated",
                error: error
            }
        )
    }
}

export const deleteAuthorById = async (req: Request, res: Response) => {
    try {
        // 1. Recuperar id
    const authorIdToDelete = Number(req.params.id)

        // 2. Eliminar registro de la BD
        const authorDeleted =  await Author.delete(Number(authorIdToDelete))

        if(!authorDeleted.affected) {
            return res.status(404).json(
            {
                success: false,
                message: "Author doesnt exist"

            })
        }
       

        //3. Responder
        res.status(200).json({
            success: true,
            message: "Author is deleted",
            data: authorDeleted
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cannot delete author",
            error: error
        }
        )
    }
}