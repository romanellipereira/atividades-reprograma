# Banco de Dados

Um banco de dados agrupa registros utilizáveis para o mesmo fim, possibilitando um ambiente adequado para armazenamento e recuperação de informações. Bom uma definição simples, mas vamos deixar mais simples ainda com um exemplo: quando vamos cadastrar uma conta de email, facebook, twitter, etc…, estamos informando nossos dados necessários para podermos ter a conta criada certo?!, quando clicamos em salvar/cadastrar/criar, todos nossos dados são salvos em um banco de dados, ou seja, o banco serve para armazenar todos os tipos de informações necessárias para cada tipo de negocio. Simplificando, um banco de dados é um local de armazenamento de diversas
informações.

A principal aplicação de Banco de Dados é controle de operações empresariais. Já imaginaram o tamanho do banco de dados do facebook com 955 milhões de usuários ativos, por isso para cada tipo de negocio usa-se um modelo de banco de dados diferente.

### Modelos de Bancos de Dados

Um modelo de dados mostra a estrutura lógica de um banco de dados, incluindo as relações e
restrições que determinam como os dados podem ser armazenados e acessados.

* Hierárquico: Dados organizados hierarquicamente em estrutura de árvore, de modo que cada dado só possua apenas um possuidor. Este modelo entrou em desuso. Um exemplo fácil  de assimilar é a arvore genealógica familiar.

* Redes: Dados organizados em uma estrutura de grafos direcionados, permitindo que várias tabelas sejam usadas através de apontadores (referências). Este modelo entrou em desuso.

* Relacional: Este é o modelo padrão atual, toda a informação é representada como dado, para garantimos que o modelo seja relacional, precisamos de uma coleção de estrutura de dados, nomeadas relacionalmente ou informalmente de tabelas. Estas tabelas se relacionam fazendo com que dados de tabelas diferentes se relacionem, mas para fazer esses relacionamentos precisamos modelar as tabelas através das FN’s ou Formas Normais (1 FN, 2 FN, 3 FN, 4 FN e 5FN), a utilização das formas normais irá garantir a integridade do banco e como cada tabela deve se relacionar. Padrão utilizado por todos os SGBD’s atualmente.

* Orientado a objetos: Modelo mais recente e com grande tendencia de crescimento nos próximos anos. Segue todo o conceito da programação orientada a objetos. Os SGBD’s que utilizam o modelo orientados a objetos são os da Oracle e o PostgreSQL.

* NoSQL: Uma solução alternativa para os bancos de dados relacionais, possuem uma alta escalabilidade e desempenho. Toda a a informação necessária estará agrupada no mesmo registro, ou seja, em vez de você ter o relacionamento entre várias tabelas para formar uma informação ela estará em sua totalidade no mesmo registro. Grandes empresas como Google, Facebook, Twitter, LinkedIN, Amazon, Yahoo usam o banco NoSQL para fazer o armazenamento de suas informações.

Fonte: consultabd.wordpress.com