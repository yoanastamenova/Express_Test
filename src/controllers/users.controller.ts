import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../database/models/User";

export const createUser =  (req: Request, res: Response) => {
    User.find
 
    res.json({
        success: true,
        message: 'CREATE USER'
    })
}

export const updateUserById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `USER UPDATED with id ${req.params.id}`
    })
}

export const deleteUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `USER DELETED With id: ${req.params.id}`
    })
} 