Exercício 1)

a. O comando VARCHAR(255) define que deverá ser inserido uma string de no máximo 255 caracteres por padrão, sendo o id  a PRIMARY KEY ou seja, a chave primária, identificador único; O DATE define que só poderá introduzir uma data YYYY/MM/DD; VARCHAR(6) string de até 6 caracteres e o NOT NULL em algumas informações representam a obrigatoriedade daquele item.

b. O comando SHOW DATABASES exibe os databases disponíveis, no meu caso o nome da turma e meu nome. O SHOW TABLES exibe as tabelas que tem dentro da minha database, no meu caso, actor.
 
c. Exibe a tabela que foi criada, os campos criados e o tipo de cada um. Além disso, mostra se a informação é null, o tipo de chave, exibindo qual propriedade é a chave primária, se tem um default e uma informação extra;

Exercício 2)
a.INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "02", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b. Error Code: 1062. Duplicate entry '02' for key 'PRIMARY'. Ocorreu porque inseri o mesmo identificador.

c. Código de erro: 1136. Contagem de colunas não corresponde à contagem de valor na linha 1. Isso aconteceu porque foram passadas mais valores do que propriedades. Basta adicionar o birth_date e o gender.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d. Código de erro: 1364. O 'nome' do campo não tem um valor padrão. Como definimos que o campo name deverá ser obrigatório (not null), devemos adicioná-lo. Basta pesquisar a data de nascimento no google e você descobre que é o Antônio Fagundes.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

e.Código de Erro: 1292. Valor da data incorreta: '1950' para coluna 'birth_date' na linha 1. O erro ocorreu porque a data precisa estar entre aspas.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f.INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Mateus Solano",
  350000,
  "1981-03-20", 
  "male"
),
(
  "007", 
  "Marina Ruy Barbosa",
  500000,
  "1995-06-30", 
  "female"
);

Exercício 3)
a.
SELECT * FROM Actor
WHERE gender = "female";

b.
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

c.
SELECT * FROM Actor
WHERE gender = "invalid";
Uma tabela vazia foi retornada pois todos possuem gêneros válidos.

d.
SELECT id, name, salary FROM Actor
WHERE salary <= 500000;

e.Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campo. O campo se chama "name" e não nome.

Exercício 4)
a. Na query citada, se busca na tabela de atores aqueles em que o nome começam com A ou J E possuem salário acima de 300000, desta forma o resultado de busca é Juliana Paes (salário 400000) e Antonio Fagundes (salário 719333).
b.SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
c.SELECT * FROM Actor
WHERE (name LIKE "%G%");
d.SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 and 900000;

Exercício 5)
a.CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);
Uso de VARCHAR com limite de 255 caracteres por padrão, sendo o id a primary key; Title com unique para não haver repetição; Date para informar a data de lançamento no formato YYYY/MM/DD, INT na avaliação para recebermos uma nota inteira; Not Null para indicar obrigatoriedade.

b-INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);

c-INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

d-
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

e-INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "O Homem Que Copiava",
    "André, um jovem que trabalha na fotocopiadora de uma papelaria, se apaixona pela vizinha e resolve usar suas habilidades para tentar mudar de vida.",
    "2003/06/13",
    9
);

Exercício 6)
a.SELECT id, title, rating from Movie WHERE id = "004";
b.SELECT * from Movie WHERE title = "Doce de mãe";
c.SELECT id, title, synopsis from Movie WHERE rating >= 7;

Exercício 7)
a.SELECT * FROM Movie WHERE title LIKE "%vida%";
b.SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
c.SELECT * from Movie WHERE release_Date < "2021/11/22";
d.SELECT * from Movie WHERE release_Date < "2021/11/22" AND title LIKE "%culinária%" OR synopsis LIKE "%culinária%"
AND rating > 7 ;


