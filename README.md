# Escribro Challange
Este projeto consiste em uma API desenvolvida seguindo o padrão RESTful, proporcionando uma arquitetura escalável e de fácil manutenção. A API oferece endpoints intuitivos para interação com recursos específicos, seguindo as melhores práticas para criar uma experiência consistente e eficiente.

## Linguagem e Ambiente
- Desenvolvimento em JavaScript.
- Utilização do Node.js como ambiente de execução.
- Express como framework para construção da API RESTful.

## Arquitetura e Princípios de Design
- Aplicação do conceito de inversão de dependência.
- Uso de factories e repositories para facilitar a injeção de dependência.
- Implementação do padrão de use cases para melhorar a testabilidade e desacoplamento do código.
- Integração de testes unitários para garantir a robustez do código.
- Utilização do ESLint para padronização do código.

## Tecnologias Utilizadas
- Express para construção da aplicação web.
- bcrypt para hash de senhas.
- Prisma ORM para manipulação do banco de dados.
- Vitest para realização de testes unitários.
- JWT para autenticação e autorização.
- ESLint para manter a consistência no código fonte.

## Requisitos do Sistema

Antes de iniciar a instalação do projeto Desafio2-Escribo, certifique-se de ter os seguintes requisitos instalados em sua máquina:

1. **Node.js e npm:**
   - Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados. Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org/).

   ## Instalação

Siga as etapas abaixo para instalar e configurar o projeto Desafio2-Escribo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/desafio2-escribo.git

2. **Acesse o diretório do projeto:**

   ```bash
   cd desafio2-escribo

3. **Instale as dependências:**

   ```bash
   npm install


4. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

     ```env
     JWT_SECRET_KEY=SuaChaveSecreta
     DATABASE_URL="file:./dev.db"
     ```

     Substitua `SuaChaveSecreta` por uma chave secreta para assinar os tokens JWT.

## Configuração do Banco de Dados

Após configurar a variável `DATABASE_URL` no arquivo `.env`, você pode aplicar as migrações do banco de dados usando o seguinte comando:

```bash
npx prisma migrate dev
```

Este comando executará as migrações do Prisma e garantirá que o projeto esteja pronto para ser iniciado.


## Executando o Projeto

1. **Inicie o projeto em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

O servidor estará disponível em http://localhost:3333.

## Testes Unitários

Para executar os testes unitários, utilize o seguinte comando:

```bash
npm run test
```

Se desejar observar os testes em ação, você pode usar o comando:

```bash
npm run test:watch
```

Isso garantirá que sua aplicação está funcionando corretamente e mantendo a integridade do código.

## Comandos Rápidos:
- `npm run dev`: Inicie o projeto em modo desenvolvimento.
- `npm run build`: Execute a build do projeto.
- `npm run start`: Inicie o projeto em modo produção.
- `npm run test`: Execute testes unitários.
- `npm run test:watch`: Observe os testes em ação.

## Rotas Disponíveis
URL API: https://desafio2-escribo.onrender.com/

### Registro de Conta:
- Método: POST
- Rota: `/signup`
- Corpo do JSON:
  ```json
  {
      "nome": "John Doe",
      "email": "johndoe@example.com",
      "senha": "123456",
      "telefones": [ { "numero": "2324453546", "ddd": "13" } ]
  }

### Autenticação de Conta:
- Método: POST
- Rota: `/signin`
- Corpo do JSON:
  ```json
  {
      "email": "johndoe@example.com",
      "senha": "123456",
  }

### Buscar Perfil do Usuário:
- Método: GET
- Rota: `/user`
- Autenticação necessária com um Bearer token no cabeçalho.


# Requisitos do Projeto

## RFs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível buscar o perfil do usuário;

## RNs (Regra de negócio)
- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não deve poder buscar o perfil caso não esteja autenticado;

## RNFs (Requisitos não funcionais)
- [X] Todos os endpoints devem aceitar e retornar apenas dados no formato JSON;
- [X] Retorno JSON para situações de endpoint não encontrado;
- [X] Armazenamento persistente de dados do usuário;
- [X] Padronização de estilo (Eslint);
- [X] A senha do usuário precisa estar em hash;.
- [X] O usuário deve ser identificado por um JWT (JSON Web Token);
- [X] Deve haver testes unitários cobrindo os casos de uso;
- [X] Task runner para build.;

## Contribuição

Fique à vontade para contribuir com melhorias e correções. 