import { Request, Response } from "express";

export const createAuthor =  (req: Request, res: Response) => {
   console.log(req.body);
   console.log(req.body.name);
   console.log(req.body.nationality)

   res.send('CREATE AUTHOR')
}


export const updateAuthorById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.send(`AUTHOR UPDATED with id ${req.params.id}`)
}

export const deleteAuthorById = (req: Request, res: Response) => {
    res.send(`AUTHOR DELETED With id: ${req.params.id}`)
}

