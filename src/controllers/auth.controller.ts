import bcrypt from 'bcrypt'
import { Request, Response } from "express";
import { User } from "../database/models/User";

export const register = async (req: Request, res: Response) => {
    try {
        // 1. recuperar la info
        const email = req.body.email
        const password = req.body.password

        // 2. validar la info
        if (!email || !password) {
            return res.json(400).json(
                {
                    success: false,
                    message: "Email and password are required"
                }
            )
        }

        // TODO validar formato email

        if (password.length < 8 || password.length > 12) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Password is not valid, 8 to 12 charachters must be needed"
                }
            )
        }

        // 3. tratar la info si hace falta
        // TODO encriptar password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // 4. guardar en bd
        const newUser = await User.create(
            {
                email: email,
                password: hashedPassword
            }
            // {
            //   email,
            //   password
            // }
        ).save()

        // 5. responder
        res.status(201).json(
            {
                success: true,
                message: "user registered",
                data: newUser
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "user cant be registered",
                error: error
            }
        )
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        //1. Get info
        const { email, password } = req.body;

        //2. Comprobar info
        if (!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email and password are needed"
                }
            )
        }

        //3. Comprobar si usuario existe

        const user = await User.findOne(
            {
                where: { email: email }
            }
        )

        if(!user) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email or password not found"
                }
            )
        }

        //4. Comprobar si la contrasena coincide con el correo

        const comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
           return res.status(400).json(
            {
                success: false,
                message: "Email or password incorrect"
            }
           )
        } else {
            return res.status(200).json(
                {
                    success: true,
                    message: "Logged in successfully!"
                }
            )
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cannot be logged in",
            error: error
        }

        )
    }
}