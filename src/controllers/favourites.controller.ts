import { Request, Response } from "express";
import { User } from "../database/models/User";
import { Favourite } from "../database/models/Favourite";
import { Book } from "../database/models/Book";

export const addFavouriteBook = async (req: Request, res: Response) => {
    try {
        //1. Get ID of user which we want to add book
        const userID = req.tokenData.id 
        const bookID = req.body.book_id   

        if(!bookID){
            return res.status(400).json(
                {
                success: false,
                message: "Book with this ID does not exist!"
                }
            )
        }

        //2. Add favourite to his register

        const newFav = await Favourite.create(
            {
                book_id: bookID,
                user_id: userID
            }
        ).save()

        // 3. responder
        res.status(201).json(
            {
                success: true,
                message: "New favourite book added!",
                data: newFav
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error adding new favourite book!",
                error: error
            }
        )
        
    }
}

export const deleteFavourite = async (req: Request, res: Response) => {
    try {
        //1. Recuperamos el id del favourite
        const favouriteID = req.params.id
        const userID = req.tokenData.id

        //2. Comprobar si este favourite ID existe
        const userFav = await Favourite.findOne(
            {
                where: {
                   id: parseInt(favouriteID),
                   user_id: userID
                }
            }
        )
        

        //3. Validar la informacion obtenida 

        if(!userFav){
            return res.status(404).json(
                {
                    success: false,
                    message: "Favourite not found!"
                }
            )
        }

        const favDeleted = await Favourite.delete(
            {
                id: parseInt(favouriteID) 
            }
        )


        res.status(200).json(
            {
                success: true,
                message: "Favourite deleted successfully!",
                data: favDeleted
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Cannot delete favourite book!",
                error: error
            }
        )
        
    }
}