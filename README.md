# DesafioMaximize

# Objetivo
   O desafio consiste em Desenvolver uma micro aplicação com uma única página de contato, que salvará as mensagens submetidas em uma base de dados. Além disso, o formulário deverá enviar um    e-mail de confirmação para o remetente. Também deverá haver um CMS/Manager para visualizar as mensagens submetidas no formulário.
   
   
  A linguagem de programação utilizada deve ser PHP ou Javascript. Usar o Banco de dados de sua preferência. O formulário deve ser salvo através de uma API. O CMS        precisa apresentar uma listagem das mensagens e também uma visualização individualizada desta mensagem.
  
# Design

 <img src="https://github.com/Luisnofb/contactForm/blob/main/img/contato.jpg" width="720px"/>
  
# Tecnologias
  
<br/>
  
-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Bootstrap](https://getbootstrap.com/)
-   [Flexbox](https://origamid.com/projetos/flexbox-guia-completo/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [Java](https://www.java.com/pt-BR/)
-   [Spring](https://spring.io/projects/spring-framework)
-   [Postman](https://www.postman.com/)
-   [PostgrsSQL](https://www.postgresql.org/)
-   [Heroku](https://heroku.com/)

<br/>
  
# FrontEnd
  O front consiste em uma aplicação React que utiliza TypeScript para fazer a tipagem dos dados recebidos e enviados. Foi utilizado o bootstrap em alguns componentes e   Axios para interação com a API.
  
# BackEnd
  O back é uma API desenvolvida em java, utilizando o spring framework e a JPA para o gerenciamento de dependências, ORM e CRUD. O SGBD utilizado foi o Postgre, o Postman serviu de local de testes para a API e o heroku mantem o banco online e acessivel a todo momento.
  
- Modelo API
<img src="https://github.com/Luisnofb/contactForm/blob/main/img/api.png" width="720px"/>

- Script sql
```sql
create table tb_message (id int8 generated by default as identity,msg varchar(255), user_email varchar(255), user_id int8 , primary key (id));
create table tb_user (id int8 generated by default as identity, company varchar(255), email varchar(255), name varchar(255), telephone varchar(255), primary key (id));
alter table if exists tb_message add constraint FKl8lgmbrjoav0thqqtqx6vrr4k foreign key (user_id) references tb_user;
INSERT INTO tb_user(company, email, name, telephone) VALUES ('Bradesco', 'maria@gmail.com', 'Maria', '989457733');
INSERT INTO tb_user(company, email, name, telephone) VALUES ('Maximize', 'luis@gmail.com', 'Luis', '992179526');
INSERT INTO tb_message (msg, user_email, user_id) VALUES ('Oi mundo', 'maria@gmail.com', 1);
INSERT INTO tb_message (msg, user_email, user_id) VALUES ('Ohana quer dizer familia', 'maria@gmail.com', 1);
INSERT INTO tb_message (msg, user_email, user_id) VALUES ('Alone in the dark', 'maria@gmail.com', 1);
INSERT INTO tb_message (msg, user_email, user_id) VALUES ('Amigo estou aqui', 'luis@gmail.com', 2);
```
 
# Resultado Final

- Page
 <img src="https://github.com/Luisnofb/contactForm/blob/main/img/2022-04-18%20(1).png" width="720px"/>

- List
 <img src="https://github.com/Luisnofb/contactForm/blob/main/img/2022-04-18%20(2).png" width="720px"/>
 
# Como executar
   Apos baixar o repositório execute o comando:
   
```bash
   yarn start
```
         
         
  na pasta frontend.


