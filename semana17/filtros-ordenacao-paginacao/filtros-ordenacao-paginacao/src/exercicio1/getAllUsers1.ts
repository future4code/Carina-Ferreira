import { Request, Response } from "express"
import selectAllUsers1 from '../data/selectAllUsers'
import { connection } from "../data/connection"

export default async function getAllUsers1(req: Request, res: Response){
    try {
       const name = req.query.name
       const users = await selectAllUsers1()

       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send({
          name
      })
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }