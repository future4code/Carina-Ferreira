import {Request, Response} from 'express';
import updateUser from '../data/updateUser';

export default async function editUser(
    req: Request,
    res: Response
){
    try {
        if(
            req.body.name === '' || 
            req.body.nickname === '' ||
            req.body.email === '' 
        ){
            res.status(400).send({
                message: "Os campos não podem estar em branco."
            })
            return
        }

        if(!req.body.name && 
           !req.body.nickname &&
           !req.body.email ){
            
            res.status(400).send({
                message: "Pelo menos uma informação deve ser alterada"
            })
           }

        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        
        res.status(200).send({
            message: "Atualização realizada com sucesso."
        })
    } catch (error) {
        res.status(400).send({
            message: "Ocorreu um erro! Tente novamente."
        })
        
    }
}
    
