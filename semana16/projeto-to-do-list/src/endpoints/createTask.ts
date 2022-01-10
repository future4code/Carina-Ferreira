import {Request, Response} from 'express';
import moment from 'moment';
import insertTask from '../data/insertTask'

export default async function createTask(
    req: Request,
    res: Response
){
    try {
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.limitDate ||
            !req.body.creatorUserId
        ){
            res.status(400).send({
                message: 'É obrigatório informar "title", "description", "limitDate" e "creatorUserId"'
            })
            return
        }

        const dateDiff: number = moment(req.body.limitDate, 'DD/MM/YYYY').unix() - moment().unix()

        if(dateDiff <= 0){
            res.status(400).send({
                message: 'É necessário escolher uma data futura para "limitDate"'
            })
            return
        }

        const id: string = Date.now().toString()

        await insertTask(
           id,
           req.body.title,
           req.body.description,
           moment(req.body.limitDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
           req.body.creatorUserId 
        )

        res.status(400).send({
            message: "Tarefa criada com sucesso.",
            id
        })
            
    } catch (error) {
        res.status(400).send({
        
        })
        
    }
}
    
