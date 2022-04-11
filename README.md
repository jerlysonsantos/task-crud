# Como rodar a aplicação

## _Docker_

Utilize os seguintes comandos para rodar como PROD

> `sudo docker build -t task-crud:v1 .` > `sudo docker run task-crud:v1`

Utilize os seguintes comandos para rodar como DEV

> `sudo docker-compose up`

## _Terminal_

Utilize os seguintes comandos para rodar como PROD

> `yarn` > `yarn build` > `yarn start`

Utilize os seguintes comandos para rodar como DEV

> `yarn` > `yarn dev`

é necessário que haja um .ENV (Veja o exemplo na pasta raiz)

# Rotas

> /tasks (GET)
> /tasks/1 (GET)
> /tasks/create (POST)
> /tasks/edit/1 (PUT)
> /tasks/finish/1 (PUT)
> /tasks/delete/1 (DELETE)
