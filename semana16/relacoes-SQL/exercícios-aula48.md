#### Exercício 1)
`a.` 
A foreign key (chave estrangeira) indica que uma determinada propriedade tem ligação com ligação com a primary key (chave primária) de uma outra tabela.

`b.`
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    		comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    		movie_id VARCHAR(255),
    		FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"AAA",
    	"Um doce de filme!",
	 10,
	"002"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"CCC",
    	"Interessante e divertido!",
	 9,
	"004"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"BBB",
    	"Muito bacana (: ",
	 8,
	"003"
);
```

`c.`
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Gerou erro, pois não é possível adicionar ou atualizar a linha que não possui um id correspondente.

`d.`
```
ALTER TABLE Movie DROP COLUMN rating;
```
`e.`
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Não é possível apagar um filme que possui uma tabela de relação (propriedade com foreign key), é necessário apagar a relação primeiro.


 #### Exercício 2)
`a.`
Essa é uma tabela intermediária que representa o elenco de um filme, relacionando os atores e filmes.

`b.`
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    	"001"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
    "002",
    "002"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    	"003"
);

```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    	"004"
);
```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    	"005"
);

```
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    	"006"
);
```
`Observação:` A relação entre atores e filmes não condiz com a realidade kkkkkk.

`c.`
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. 
Não é possível interligar um filme ao ator se ele não existe.

`d.`
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Não é possível deletar um ator que está relacionado à uma tabela. É necessário apagar essa relação primeiro.

#### Exercício 3)
`a.`
Nessa query nós conseguimos agrupar as informações de duas tabelas e formar uma só. Isso é possível com o operador ON, já que sem ele as informações não estariam relacionadas corretamente, apenas misturadas.

`b.`
```
SELECT m.id as movie_id, r.rate as rating, m.title as title FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```


