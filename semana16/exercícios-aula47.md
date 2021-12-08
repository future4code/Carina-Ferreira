#### Exercício 1)
`a.`
O retorno de uma requisição feita por raw é exatamente como no MySQL.

`b.`
```
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor 
    WHERE name = "${name}"
  `)
  return result
}
```
`c.`
```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
 const count = result[0][0].count;
  return count;
};
```
#### Exercício 2)
`a.`
```
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```
`b.`
```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```
`c.`
```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

#### Exercício 3)
`a.`
```
app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await connection.raw(`
            SELECT * FROM Actor
            WHERE id = "${id}"
        `)
    res.status(200).send(resultado[0]);
  } catch(error){
    res.status(500).send(error.sqlMessage || error.message)
    }
  });
```
`b.`
```
app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender;
    const resultado = await connection.raw(`
          SELECT COUNT (*) FROM Actor
          WHERE gender = "${gender}"
      `)
  res.status(200).send(resultado[0]);
} catch(error){
  res.status(500).send(error.sqlMessage || error.message)
  }
});
```

#### Exercício 4)
`a.`
```
app.put("/actor/:id", async (req, res) => {
  try {
    await connection("Actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });

    res.status(200).send("Ator foi atualizado!");
  } catch (error) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});
```
`b.`
```
app.delete("/actor/:id", async (req, res) => {
    try {
      await connection("Actor").delete().where({ id: req.params.id });
  
      res.status(200).send("O Ator foi deletado!");
    } catch (error) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });
```

