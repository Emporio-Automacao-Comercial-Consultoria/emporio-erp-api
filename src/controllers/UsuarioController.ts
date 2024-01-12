import { Request, Response, NextFunction, json } from 'express';
import { User } from '../models/Users/User';
import "reflect-metadata";
import { createConnection } from "typeorm";

export default {

    list(req: Request, res: Response) {
        createConnection().then(async connection => {
            console.log("Loading users");
            const users: User[] = await connection.manager.find(User);
            connection.close();
            res.json(users);
            console.log("Loaded users");
        }).catch(error => console.log(error));
    },

    add(req: Request, res: Response) {
        createConnection().then(async connection => {
            const user = new User(
                req.body.nome,
                req.body.sobrenome,
                req.body.cpf,
                req.body.cargo,
                req.body.nivel,
                req.body.escala,
                req.body.caixa,
                req.body.usaSmart,
                req.body.role
            );

            await connection.manager.save(user);

            connection.close();

            res.json({ message: "sucess" })
        });
    },

    delete(req: Request, res: Response) {

        createConnection().then(async connection => {

            const user = await connection.manager.findOne(User, req.params.id);
            //connection.close();
            await connection.manager.delete(User, user)
                .catch(error => {
                    res.json(error);
                    connection.close();
                });
            connection.close();

            res.json("User deleted");
            console.log("User deleted");

        });
    },

    update(req: Request, res: Response) {

        createConnection().then(async connection => {

            const user: User =<User> await connection.manager.findOne(User, req.params.id);

            await connection.manager.update(User, user, new User(
                req.body.nome,
                req.body.sobrenome,
                req.body.cpf,
                req.body.cargo,
                req.body.nivel,
                req.body.escala,
                req.body.caixa,
                req.body.usaSmart,
                req.body.role
            ))
                .catch(error => {
                    res.json(error);
                    connection.close();
                });

            connection.close();

            res.json({
                message: "User updated"
            });
            console.log("User updated");

        });

    }

}




