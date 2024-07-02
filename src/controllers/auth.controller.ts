import e, {Request, Response} from "express";

export const register = (req: Request, res: Response) => {
    try {

        //1. Recuperar la info
        const email = req.body.email
        const password = req.body.password

        //2. Validar la info

        if(!email || !password) {
           return res.json(400).json(
            {
                success: false,
                message: "Cannot register with empty email or password fields"
            }
           )
        }
        
        // TODO check email format

        if(password.length < 8 || password.length > 12) {
            return res.status(400).json(
            {
                success: false,
                message: "Password is not within range"
            }
            )
        }

        //3. Tratar la info si hace falta

        // TODO encrypt password
    } catch(error) {
       res.status(500).json(
        {
            success: false,
            message: "Cannot create user",
            error: error
        }
       )
    }
}