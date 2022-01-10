#### Exercício 1)
`a.` Esse comando exclui a coluna "salary" da tabela Actor;
`b.` O comando muda/redeclara o nome do campo gender por sex com VARCHAR(6), ou seja, uma string deve ser adicionada com no máximo 6 caracteres;
`c.` O comando muda o campo gender, o nome continua o mesmo porém o tipo muda para um VARCHAR(255), string com o padrão de no máximo 255 caracteres;
`d.`  
```
 ALTER TABLE Actor
 CHANGE gender gender VARCHAR(100);
 ```

#### Exercício 2)
`a.` 
```
UPDATE Actor
SET name = "Lilia Cabral", birth_date = "1957/07/13"
WHERE id = "003";
```
`b.`
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```
`c.` 
```
UPDATE Actor
SET name = "Alexandre Nero",
salary = 830000,
birth_date = "1970/02/13",
gender = "male"
WHERE id = "005";
```
`d.`
```
UPDATE Actor
SET name = "Malvino Salvador"
WHERE id = "219";
A ação deu certo, porém retornou: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0; Pois não existe um id 129 para ser alterado;
```

#### Exercício 3)
`a.` DELETE FROM Actor WHERE name = "Fernanda Montenegro";
> Observação: A ação deu certo, porém já não existia a atriz na tabela, por alterações provenientes dos exercícios anteriores.

`b.`
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

#### Exercício 4)
`a.` 
```
SELECT MAX(salary) FROM Actor;
```
`b.`  
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```
`c.`
```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```
`d.` 
```
SELECT SUM(salary) FROM Actor;
```

#### Exercício 5)
`a.`
``` 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```
Ela retorna a quantidade de atores de acordo com o gênero, porém nesse caso é possível visualizar melhor na tabela.

`b.`
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
`c.`
```
SELECT * FROM Actor
ORDER BY salary;
```
`d.`
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
`e.`
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

#### Exercício 6)
`a.` 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
`b.` 
```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```
`c.`
```
UPDATE Movie
SET playing_limit_date = "2022-01-15"
WHERE id = "003";

UPDATE Movie
SET playing_limit_date = "2004-02-03"
WHERE id = "004";
```
`d.`
```
DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET synopsis = "Um casal que vive brigando troca de corpo e vive grandes aventuras."
WHERE id = "001";
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. A ação deu certo, porém como o id já foi excluído, não há alterações.

#### Exercício 7)
`a.`
```
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;
```
3 filmes possuem nota de avaliação acima de 7,5.
`b.`
```
SELECT AVG(rating)
FROM Movie;
```
A avaliação média é 9.

`c.`
```
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date >= CURDATE();
```
Existe apenas 1 filme em cartaz.

`d.`
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
0, pois todos os filmes já foram lançados.

`e`.
```
SELECT MAX(rating) FROM Movie;
```
A maior avaliação é 10

`f.`
```
SELECT MIN(rating) FROM Movie;
```
A menor avaliação é 8.



#### Exercício 8)
`a.`
```
SELECT * FROM Movie
ORDER BY title;
```
`b.`
```
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```
`c.`
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
`d.`
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```

