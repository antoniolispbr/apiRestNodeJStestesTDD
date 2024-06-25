# apiRestNodeJStestesTDD
API Rest em NodeJS aplicando testes (TDD) desde o início.

Nesse desenvovimento, inicialmente, aprendi a montar o nosso ambiente de desenvolvimento, configurar o VSCode. Em seguida, aprendi o básico do Jest para criarmos os nossos testes... a partir daí vamos criar um teste e desenvolver a nossa aplicação até o teste passar. E assim será ao longo deste desenvolvimento, um teste de cada vez, uma funcionalidade de cada vez, evoluindo sempre com segurança, pois configuraremos nossos testes de tal forma que toda a API será testada sempre que você salvar algum arquivo. Caso algo deixe de funcionar, com um simples Ctrl+Z será possível retornar à normalidade de antes.

Durante o desenvolvimento, irei criar a API de um gerenciador financeiro onde, no lado dos testes, apresentarei diversos recursos do Jest para fazer assertivas e estruturar nossos testes. Já no lado do desenvolvimento, trabalharemos com várias bibliotecas famosas como o Express para criar o nosso servidor, o Passport e JWT para autenticação, Knex e Postgres para migração e consultas ao banco de dados, além de outras.

Importante ressaltar que os testes não serão a nível unitário, farei todas as verificações diretamente nos serviços. O que fará o teste mais real, pois o fluxo passará desde a chamada da URL, passando pelo roteamento, regras de negócio e banco de dados. Porém trará dificuldades extras como a necessidade de possuir o ambiente sempre atualizado e a necessidade de gerenciar a massa de dados necessários para os testes.
