import { users } from './data'
import { user } from './types'
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor pronto!")
  })


// Exercício 1)

// a. Qual método HTTP você deve utilizar para isso?
// Resposta: Método GET.
// b. Como você indicaria a entidade que está sendo manipulada?
// Resposta: indicaria usando o "/users" 

// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 
// ENDPOINT PARA PEGAR TODOS OS USUÁRIOS

app.get("/users", (req: Request, res: Response) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
        age: user.age
      }))

    res.status(200).send(result)
})

//Exercício 2)
// Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica, 
// recebendo apenas um `type` por vez. Após isso, responda:
// a. Como você passou os parâmetros de type para a requisição? Por quê?
//Resposta: Passei por meio da propriedade query, que é um parâmetro de consulta. Para acessar eu utilizei o req.query.type.
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//Resposta: Isso pode ser feito por meio do enum, que define os possíveis types para um user.

// ENDPOINT PARA BUSCAR DE ACORDO COM O TYPE DE USUÁRIO
app.get("/users/search", (req, res) => {
    let errorCode: number = 400;
    let result: user[] = users
    try {
        if (!req.query.type) {
            errorCode = 404
            throw new Error("User not found");
          }
  
          if (req.query.type) {
              result = result.filter(
                  user => user.type.includes(req.query.type as string)
              )
          }

      res.status(200).send(result);

    } catch (error: any) {
        res.status(400).send(error.message);
  }
});

//Exercício 3)
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de
// busca que encontre um usuário buscando por nome.
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Resposta: Query.
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

// ENDPOINT PARA BUSCAR DE ACORDO COM O NOME DE USUÁRIO
app.get("/users/search/name", (req, res) => {
    let errorCode: number = 400;
    let result: user[] = users
    try {
        if (!req.query.name) {
            errorCode = 404
            throw new Error("User not found");
          }
  
          if (req.query.name) {
              result = result.filter(
                  user => user.name.includes(req.query.name as string)
              )
          }

      res.status(200).send(result);

    } catch (error: any) {
        res.status(400).send(error.message);
  }
});

//Observação: A busca só dá certo se o nome for passado exatamente como nos dados do usuário,
//preciso aprimorar o endpoint de diversas maneiras.

// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. 
// Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.
// a. Mude o método do endpoint para `PUT`. O que mudou?
//Resposta: Nada, o endpoint continuou funcionando e criou outro usuário.
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//Resposta: Não, porque semânticamente ele é usado para alterar informações e não adicionar.

// ENDPOINT PARA ADICIONAR USUÁRIO
app.put("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const { id, name, email, type, age } = req.body;
  
      if (!id || !name || !email || !type || !age) {
        errorCode = 422;
        throw new Error("Please check the fields!");
      }
  
      const newUser: user = {
        id,
        name,
        email,
        type,
        age,
      };
  
      users.push(newUser);
  
      res.status(201).send({ message: "User created successefully" });
    } catch (error: any) {
      res.status(errorCode).send({ messagem: error.message });
    }
  });

