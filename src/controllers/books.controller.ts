import { Request, Response } from "express";

export const createBooks =  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.author);
    
    res.json({
        success: true,
        message: 'CREATE BOOK'
       })
}

export const updateBookById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `BOOK UPDATED with id ${req.params.id}`
       })
}

export const deleteBookById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `BOOK DELETED With id: ${req.params.id}`
       })
}