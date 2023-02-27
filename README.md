# Kanban API

Esta é uma API simples de Kanban, para demonstrar uma arquitetura limpa e coesa.

## 1. Build

Antes de efetuar o deploy, é necessário criar um novo arquivo `.env` na raiz do projeto e copiar o conteúdo do arquivo `.env.example` para ele. Substitua os valores sugeridos conforme a necessidade.

Existem duas formas de efetuar o `deploy` da aplicação.

1. [Deploy local](#11-deploy-local)
2. [Deploy com Docker](#12-deploy-com-docker)

### 1.1. Deploy local

O deploy local irá iniciar uma instância da API na porta `5000`, por padrão. Para isso, pelo terminal, na raiz do projeto, execute o seguinte comando:

```shell
npm run start:dev
```

### 1.2. Deploy com Docker

Para efetuar o deploy utilizando Docker não é necessário informar as variáveis `AUTH_DEFAULT_USERNAME` e
`AUTH_DEFAULT_PASSWORD` no arquivo `.env`. Para isso:

1. Efetue o build da imagem:

```shell
docker build -t kanban-api .
```

2. Execute o arquivo `docker-compose.yml`:

```shell
docker-compose up -d
```

Após a inicialização, a API estará disponível na porta `5000`.

## 2. Lint

Para efetuar a verificação utilizando o linter, utilize o seguinte comando:

```shell
npm run lint
```

## 3. Testes

Para executar os testes unitários, utilize o seguinte comando:

```shell
npm run test
```

Para executar os testes unitários, verificando a cobertura, e gerando o arquivo de _coverage_, utilize o seguinte comando:

```shell
npm run test:cov
```
