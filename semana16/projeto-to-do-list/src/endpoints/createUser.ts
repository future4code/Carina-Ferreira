import {Request, Response} from 'express';
import insertUser from '../data/insertUser';

export default async function createUser(
    req: Request,
    res: Response
){
    try {
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) { res.status(400).send("Preencha todos os campos obrigatórios (name, nickname, email)")
            return
    }
        
        const id: string = Date.now().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200).send("O usuário foi criado!")
    } catch (error) {
        res.status(400).send({
        
        })
        
    }
}
    
