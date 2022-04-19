# LogProgress

- 12/04

  Iniciei o projeto, que no auge de minha criatividade para nomes denominei ContactForm. Haja vista que tenho prazo para entregar o desafio, decidi me basear em um   projeto que fiz utilizando React com TypeScript no front e Java, Spring Boot para o backend: https://github.com/Luisnofb/DSMovie-1.
  
  Comecei retirando elementos desnecessários do projeto React e iria iniciar pelo frontend, mas como seguir o design vai demandar tempo e atenção, decidi começar definindo um modelo conceitual para o banco de dados e inicializei o projeto Spring. Como posteriormente planejo hospedar as partes em locais diferentes, foinecessário criar alguams configuraçoes de segurança utilizando bibliotecas do framework.

- 13/04

  Comecei implementando o diagrama do projeto, para realizar o ORM defini as classes das entidades, configurei o banco de dados fazendo omapemanento Objeto relacional. Iniciei como banco de testes h2, um banco em memória, para agilizar os testes iniciais com a JPA, e fiz o seed inicial do banco.

- 14/04

  Configurei a busca de mensagens, usei um padrão de camadas ao componentizar os metodos, e classes de dados.Os objetos repository criados com a JPA fazem estabelecem o CRUD. para fazer o trafego dos dados escolhi criar objetos DTO, objetos simples para trafego de dados, sem o monitoramento da JPA.

  Nas classes service implementei metodos para gerencimento dos dados e o framework se encarregou das dependências.Os endpoints de API foram criados, inicialmente para GET, usei um testador de requisições, PostMan, para fazer os testes na API.

- 15/04

  No intuito de salvar as mensagens e os dados do remetente, cadastrava a medida que um email novo era informado. O trafego foi novamente usando DTO, e escolhi o email como elelmento de diferenciação.

- 16/04
  
  Escolhi o banco de dados postgreSQL, fiz a primeira homologação, decidir criar perfis de projeto, para testes, desenvolvimento e o final que seria online, usando o Heroku, fiz as configurações necesárias  e o script sql para setar o banco. Vinculei o repositório local ao Heroku e as requerimentos a API agora são encaminhadas ao heroku.

  Agora trabalhando novamente com o front, decidir usar o react pois gosto do modelo de componentes e ja tive experiência com a tecnologia. Adicionei o Bootstrap e formulei a estrutura basica da página e um css inicial. coloquei as fontes e os assets disponibilizados.

- 17/04

  Escolhi implementar um CMS simplista e direto ao ponto para exibir as mensagens, usei os breakPoints do Bootstrap para organizalos na tela. o layout estático foi feito usando components react. e coloqui uma primeira versão no Netlify.

  Comecei a entregar o front e o back, usando Auxios do react, pois acho mais simples e direto ao ponto. setei a url base e as variáveis de ambiente. Decidir testar as requisições na API, no banco de testes, fiz varios exemplos e fiquei satisfeito com o resultado. Fiz tipos Base para receber o retorno da API. Usando os Reac Hooks, useState e UseEfect para manter os dados no ciclo de vida da aplicação, peguei as informaçoes e apliquei a lógica. Termieni a listagem dinâmica das mensgaens, em forma paginada, e interceptei os dados do formulário, verificando se um email coerente era informado como critério. se a mensagem não fosse repetida, iria para o banco, lógica seguida desde o formato PUT para as submissões.Linkei o Heroku ao Netlify, e defini que localmente o front iria recorer ao Heroku, para que não houvesse a necessidade de usar minha IDE, e ser possivel visualizar em outras maquinas.

-18/04

  Foi o dia dos acabamentos no front, usei alguns ellemntos do BootStrap para agilizar e fiz outros, foi um processo bem ao estilo tentativa e erro, e nem tudo saiu exatamente como no modelo, mas acredito que o fundamental esta presente. O front se envia e recebe dados usando a minha API e as mensagens são exibidas ao final da página.

  Foi um processo de muito trabalho e aprendizado. No fim, fico feliz com o que foi feito, todavia existem pontos onde gostaria de trabalhar melhor se tivesse mais tempo. Tornar o site responsivo, Colocar os requerimentos que faltaram, implementar alguns elementos que ficaram faltando e melhorar a forma como algumas coisas foram feitas.O banco relaciona os dois elementos, Usuários e mensagens, atraves do email, mas acabei deixando um componente mal implementado que recebe valores nulos. Com mais tempo bsucaria formas usando o Framework de tratar esse problema.

