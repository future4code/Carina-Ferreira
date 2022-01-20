import { connection } from "../data/connection"
// import { Request, Response } from "express"

export default async function selectAllUsers1(name:string):Promise<any> {
   //  const name = req.query.name
    const result = await connection("aula49_exercicio")
    .select('*')
    .where("name", "LIKE", `%${name}%`)
 
    return result[0]
 }