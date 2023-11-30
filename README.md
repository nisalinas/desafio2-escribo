# Escribro Challange

API RESTful.

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