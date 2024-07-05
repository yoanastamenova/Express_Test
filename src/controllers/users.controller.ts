import { Request, Response } from "express";
import { User } from "../database/models/User";

export const createUser =  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
 
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

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        //1. Get all the user informations
        const users = await User.find(
            {
                select: {
                    email: true,
                    is_active: true,
                    created_at: true
                }
            }
        )

        //2. Return info
        res.json(
            {
                success: true,
                message: "All users retrived successfully!",
                data: users
            }
        )
        
    } catch(error) {
        res.status(500).json(
            {
                success: false,
                message: "Error retriving all users",
                error: error
            }
        )
    }
}

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        //1. Get info
        const userId = req.tokenData.id;


        //2. Find the user responding ot the token

        const user = await User.findOne(
            {
                where: { id: userId}
            }
        )


        //3. Return response

        res.json(
            {
                success:true,
                message: "User profile retrived",
                data: user
            }
        )
        
    } catch(error) {
        res.status(500).json(
            {
                success: false,
                message: "Error retriving profile",
                error: error
            }
        )
    }
}

export const getUserFavouritesBooks = async (req: Request, res: Response) => {
    try {
        //1. Get info for the wanted user
        const userID = req.tokenData.id

        //2. Buscar el usuario
       const userFavBooks = await User.findOne(
            {
                where: {
                    id: userID
                }
            }
        )
        //3. Respuesta
        res.status(200).json(
            {
                where: {
                    id: userID
                },
                relations: {
                    favourite_books: true
                }
            }
        )
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Cannot get favourite books of user",
            error: error
        })
        
    }
}