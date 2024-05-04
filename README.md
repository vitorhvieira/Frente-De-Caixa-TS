# 🛒 Frente de Caixa API

Bem-vindo à Documentação da API de Frente de Caixa! Esta API oferece uma solução eficaz e segura para a gestão integral do seu sistema de ponto de venda. Com funcionalidades intuitivas, como o cadastro simplificado de usuários e autenticação robusta, proporcionamos uma experiência fluida. Além disso, a gestão de produtos e clientes é otimizada, permitindo operações como cadastro, edição e listagem. Explore nossos endpoints cuidadosamente projetados para impulsionar a eficiência do seu negócio.

- Gestão de Usuários:

  - Criar Usuário: Facilidade na criação de contas para usuários.
  - Login: Autenticação segura para acesso às funcionalidades da API.

- Detalhamento e Atualização de Conta:

  - Detalhar Usuário: Obtém informações detalhadas sobre o usuário.
  - Atualizar Conta: Permite a atualização das informações da conta.

- Gestão de Produtos:

  - Listar Categorias: Fornece uma visão geral das categorias disponíveis.
  - Cadastrar Produto: Simplifica a inclusão de novos produtos no sistema.
  - Editar Produto: Possibilita a modificação de informações de produtos existentes.
  - Listar Produtos: Apresenta uma lista completa dos produtos cadastrados.
  - Detalhar Produto pelo ID: Fornece informações específicas sobre um produto com base em seu identificador.
  - Deletar Produto: Remove um produto do sistema.

- Gestão de Clientes:

  - Cadastrar Cliente: Facilita a inclusão de novos clientes no sistema.
  - Editar Cliente: Permite a atualização das informações do cliente conforme necessário.
  - Listar Clientes: Apresenta uma lista de todos os clientes cadastrados.

- Gestão de Pedidos:
  - Cadastrar Pedido: Simplifica o processo de criação de novos pedidos, integrando informações de produtos e clientes.
  - Listar Pedidos: Apresenta uma visão completa dos pedidos registrados.

---

## 👩🏻‍💻 Desenvolvimento

A API Frente de Caixa foi desenvolvida com foco no conceito de clean code e SOLID, priorizando a clareza, os principios e simplicidade do código. A documentação do projeto foi elaborada utilizando o Swagger, destacando cada endpoint e apresentando de forma clara os resultados correspondentes. Essas práticas resultaram em um desenvolvimento eficiente e transparente, promovendo a qualidade do código. Este projeto foi refeito utilizando a linguagem TypeScript.

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/download/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

Caso deseje se aprofundar no Swagger, ferramenta usada para documentar esta API, confira a documentação oficial em [Documentação do Swagger](https://swagger.io/docs/specification/about/).

#### 💾 Criando o Banco de Dados local

Abra seu gerenciador SQL de banco de dados favorito, copie e execute o script do arquivo dump.sql para criar as tabelas e inserir os dados iniciais no banco de dados local.

#### 🎲 Rodando o Backend

```bash
# Clone este repositório
$ git clone git@github.com:vitorhvieira/Frente-De-Caixa-TS.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Frente-De-Caixa-TS

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Execute para fazer a build do projeto.
$ npm run build

# O servidor inciará na porta:8000

# Acesse o Swagger (Documentação da API) em
GET http://localhost:8000
```

#### 🗃️ Variáveis de ambiente

Consulte as variáveis necessárias no arquivo .env.example, e atribua valores de acordo com suas informações pessoais.

## 🛣️ Endpoints

### Cadastrar Usuário

#### `POST` `/usuario`

Esse endpoint deve cadastrar um novo usuário no sistema.

- **Requisição** - O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - nome
  - email
  - senha

#### Exemplo de Requisição

```javascript
// POST /usuario
{
    "nome": "Novo Usuário",
    "email": "novoUsuario@gmail.com",
    "senha": "1234"
}
```

### Efetuar Login

#### `POST` `/login`

Esse endpoint deve realizar login através dos dados do usuário, onde será gerado um token único para identificação da conta.

- **Requisição** - O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - email
  - senha

#### Exemplo de Requisição

```javascript
// POST /login
{
    "email": "novoUsuario@gmail.com",
    "senha": "1234"
}
```

### Detalhar Usuário

#### `GET` `/usuario`

Esse endpoint deve mostrar todas as informações (exceto a senha) do usuário logado.

### Atualizar Usuário

#### `PUT` `/usuario`

Esse endpoint deverá atualizar os dados do usuário logado.

- **Requisição** - O corpo (body) deverá possuir um objeto com todas as seguintes propriedades (respeitando estes nomes):

  - nome(Opcional)
  - email(Opcional)
  - senha(Opcional)

#### Exemplo de Requisição

```javascript
// PUT /usuario
{
    "nome": "Usuário Atualizado",
    "email": "usuarioAtualizado@gmail.com",
    "senha": "12345"
}
```

### Listar Categorias

#### `GET` `/categoria`

Esse endpoint deve listar todas as categorias cadastradas no sistema.

### Cadastrar Produto

#### `POST` `/produto`

Esse endpoint deve cadastrar um produto no sistema.

- **Requisição** - O corpo (multipart/form-data) deve possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - descricao
  - quantidade_estoque
  - valor
  - categoria_id
  - produto_imagem (Opcional)

#### Exemplo de Requisição

```javascript
// POST /produto
```

<img src="./images/produtoexemplo.png" alt="Texto Alternativo">

### Editar Produto

#### `PUT` `/produto/id`

Esse endpoint deve editar um produto já cadastrado.

- **Requisição** - query parameter

  - ID : Informar o ID do produto que deseja ser editado.

- **Requisição** - O corpo (multipart/form-data) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - descricao(Opcional)
  - quantidade_estoque(Opcional)
  - valor(Opcional)
  - categoria_id(Opcional)
  - produto_imagem (Opcional)

#### Exemplo de Requisição

```javascript
// PUT /produto/id
```

<img src="./images/produtoexemplo.png" alt="Texto Alternativo">

### Listar Produto

#### `GET` `/produto`

Esse endpoint deve listar todos os produtos já cadastrados no sistema.

### Listar Produto Pelo ID

#### `GET` `/produto/id`

Esse endpoint deve listar todos os produtos relacionado ao ID informado.

- **Requisição** - query parameter

  - id : Informar o ID do produto que deseja ser listado.

### Deletar Produto

#### `DELETE` `/produto/id`

Esse endpoint deve deletar o produto relacionado ao ID informado.

- **Requisição** - query parameter

  - id : Informar o ID do produto que deseja ser deletado.

### Cadastrar Cliente

#### `POST` `/cliente`

Esse endpoint cadastrar um novo cliente no sistema.

- **Requisição** - O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - nome
  - email
  - cpf
  - rua (Opcional)
  - numero (Opcional)
  - bairro (Opcional)
  - cidade (Opcional)
  - estado (Opcional)
  - rua (Opcional)

#### Exemplo de Requisição

```javascript
// POST /cliente
{
  "nome": "Novo Cliente",
  "email": "novoCliente@gmail.com",
  "cpf": "12345678901",
  "cep": "12345678901",
  "rua": "Rua Exemplo",
  "numero": "111",
  "bairro": "Bairro de Exemplo",
  "cidade": "Cidade de Exemplo",
  "estado": "Estado de Exemplo"
}
```

### Editar Cliente

#### `PUT` `/cliente/id`

Esse endpoint edita um cliente no sistema.

- **Requisição** - query parameter

  - id : Informar o ID do cliente que deseja ser editado.

- **Requisição** - O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - nome(Opcional)
  - email(Opcional)
  - cpf(Opcional)
  - rua (Opcional)
  - numero (Opcional)
  - bairro (Opcional)
  - cidade (Opcional)
  - estado (Opcional)
  - rua (Opcional)

#### Exemplo de Requisição

```javascript
// PUT /cliente/id
{
  "nome": "Novo Cliente Atualizado",
  "email": "novoClienteAtualizado@gmail.com",
  "cpf": "12345678901",
  "cep": "12345678901",
  "rua": "Rua Exemplo",
  "numero": "111",
  "bairro": "Bairro de Exemplo",
  "cidade": "Cidade de Exemplo",
  "estado": "Estado de Exemplo"
}
```

### Listar Cliente

#### `GET` `/cliente`

Esse endpoint deve listar todas os clientes cadastrados no sistema.

### Listar Cliente Pelo ID

#### `GET` `/cliente/id`

Esse endpoint deve listar o cliente relacionado ao ID informado.

- **Requisição** - query parameter

  - id : Informar o ID do cliente que deseja ser listado.

### Cadastrar Pedido

#### `POST` `/pedido`

Esse endpoint deve realizar o cadastro de um novo pedido no sistema.

- **Requisição** - O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - cliente_id
  - observacao (Opcional)
  - pedido_produtos
    - produto_id
    - quantidade_produto

#### Exemplo de Requisição

```javascript
// POST /pedido
{
    "cliente_id": 1,
    "observacao": "Entregar antes das 18h, se possível.",
    "pedido_produtos": [
        {
            "produto_id": 2,
            "quantidade_produto": 4
        },
        {
            "produto_id": 3,
            "quantidade_produto": 1
        }
    ]
}
```

### Listar Pedidos

#### `GET` `/pedido?cliente_id=1`

Esse endpoint deve listar todos os pedidos cadastrados no sistema, ou apenas relacionado ao ID informado.

- **Requisição** - query parameter

  - cliente_id (Opcional): ID do cliente para filtrar os pedidos. Se não fornecido, serão retornados todos os pedidos.

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

📱 [Entre em contato com o Vitor!](https://www.linkedin.com/in/vitorhvieira/)

###### tags: `back-end` `nodeJS` `API REST` `desafio` `typescript`
