import { Request, Response } from "express";
import { Book } from "../database/models/Book";

export const createBooks = async (req: Request, res: Response) => {
    try{
        //1. Recuperar la info
        const title = req.body.title;
        const description = req.body.description;
        const author_id = req.body.author_id;
       
        //        const body = {title, description, author_id} = req.body

        //2. Validar la info
        if(!title || !description || !author_id){
            return res.status(400).json(
                {
                    success: false,
                    message: "Title or description or author are wrong!"
                }
            )
        }

        //3. Validar si el libro YA EXISTE

        //4. Guardar la informacion en BD
        const newBook = await Book.create(
            {
                title: title,
                description: description,
                author_id: author_id
            }
        ).save()

        res.status(201).json(
            {
                success: true,
                message: "Book created successfully!"
            }
        )

    } catch(error) {
        res.status(500).json(
            {
                success: false,
                message: "Error creating Book",
                error: error
            }
        )
    }
}

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        // 1. Recuperar la info de la BD
        const books = await Book.find(
            {
                select: {
                    title: true,
                    description: true,
                    author: {
                        name: true
                    }
                },
                relations: {
                    author: true
                }
            }
        )
    
        // 2. Responder la info de la bd
        res.json(
          {
            success: true,
            message: "All books retrieved successfully",
            data: books
          }
        )
    
      } catch (error) {
        res.status(500).json(
          {
            success: false, 
            message: "Cant retrieve Books",
            error: error
          }
        )
      }
    }