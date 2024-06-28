import { Request, Response } from "express";

export const createBooks =  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.author);
 
    res.send('CREATE BOOK')
}

export const updateBookById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.send(`BOOK with id ${req.params.id} UPDATED`)
}

export const deleteBookById = (req: Request, res: Response) => {
    res.send(`BOOK With id: ${req.params.id} DELETED`)
}