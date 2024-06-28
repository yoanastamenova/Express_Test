import { Request, Response } from "express";

export const createUser =  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
 
    res.send('CREATE USER')
}

export const updateUserById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.send(`USER with id ${req.params.id} UPDATED`)
}

export const deleteUserById = (req: Request, res: Response) => {
    res.send(`USER with id: ${req.params.id} DELETED`)
}