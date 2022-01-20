import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import  getAllUsers1  from "./exercicio1/getAllUsers1"
import express from "express"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)
app.get("/exercicio1", getAllUsers1)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})