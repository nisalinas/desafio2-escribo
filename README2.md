## Instalação

Siga as etapas abaixo para instalar e configurar o projeto Desafio2-Escribo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/desafio2-escribo.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd desafio2-escribo
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

   Este comando instalará as dependências necessárias para o projeto, que incluem:

   - `@prisma/client`: Prisma ORM para manipulação do banco de dados.
   - `bcryptjs`: Biblioteca para hash de senhas.
   - `body-parser`: Middleware para processar dados JSON.
   - `dotenv`: Carregamento de variáveis de ambiente a partir de um arquivo.
   - `express`: Framework web para Node.js.
   - `jsonwebtoken`: Implementação de JSON Web Tokens (JWT).
   - `nodemon`: Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento.
   - `prisma`: Ferramenta para migrações de banco de dados e interação com o Prisma Client.
   - `vitest`: Framework de teste para JavaScript.

4. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

     ```env
     JWT_SECRET_KEY=SuaChaveSecreta
     DATABASE_URL=SuaURLDoBancoDeDados
     ```

     Substitua `SuaChaveSecreta` por uma chave secreta para assinar os tokens JWT, e `SuaURLDoBancoDeDados` pela URL do seu banco de dados.

## Configuração do Banco de Dados

Se estiver utilizando o Prisma ORM, após configurar a variável `DATABASE_URL` no arquivo `.env`, você pode aplicar as migrações do banco de dados usando o seguinte comando:

```bash
npm run build
```

Este comando instalará as dependências, executará as migrações do Prisma e garantirá que o projeto esteja pronto para ser iniciado.

## Executando o Projeto

1. **Inicie o projeto em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

   O servidor estará disponível em [http://localhost:3333](http://localhost:3333).

2. **Acesse as rotas disponíveis:**

   - Consulte a seção "Rotas Disponíveis" no README para obter informações sobre as rotas e como utilizá-las.

3. **Teste a instalação:**

   Certifique-se de que tudo está configurado corretamente acessando a rota de teste ou realizando testes unitários.

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

## Contribuição

Fique à vontade para contribuir com melhorias e correções. Abra uma issue ou envie um pull request.

---

Parabéns pelo seu 1º aniversário, Desafio2-Escribo! 🎉🚀