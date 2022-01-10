import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor pronto!")
})


// ENDPOINT PARA BUSCAR TODOS OS PAÍSES:
app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))

    res.status(200).send(result)
})



// ENDPOINT DE BUSCA COM FILTROS
app.get("/countries/search", async (req, res) => {
    let result: country[] = countries
    
    try{
        if (!req.query.name && !req.query.capital && !req.query.continent) {
          throw new Error("Erro na busca, tente novamente");
        }

        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(req.query.continent as string)
            )
        }
        res.status(200).send(result);

    }catch (error: any) {
      res.status(400).send(error.message);
    }
})

// ENDPOINT PARA BUSCAR PAÍS POR ID
app.get("/countries/:id", (req, res) => {
    const id = req.params.id
  
    console.log(id)
  
    const result = countries.find((country) => {
        return country.id === Number(id)
    })
  
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("País não encontrado")
    }
  
  })


// ENDPOINT PARA ALTERAR PAÍS
  app.put("/countries/:id", (req, res) => {
    try {
    //    res.statusCode = 401
    //    throw new Error
    //   }
        const index = countries.findIndex((country) =>{
         return country.id === Number(req.params.id)
         })
         
        if(index === -1){
          res.statusCode = 404 
          throw new Error() 
        } 

        if (!req.body.name && !req.body.capital) {
            throw new Error("Ocorreu um erro, tente novamente!");
          }
          
        if (req.body.name) {
            countries[index].name = req.body.name;
        }
        if (req.query.capital) {
            countries[index].capital = req.body.capital;
        }
        res.status(204).end()

       } catch (error: any) {
          if (res.statusCode === 200) {
         res.status(500).end()

        }else{
         res.send(error.message)
        } 
       }
     })
     //Observação: Consegui alterar o nome do país do id 50 para "Memel", mas não consegui alterar a sua capital.