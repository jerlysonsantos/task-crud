# Como rodar a aplicação

## _Docker_

Utilize os seguintes comandos para rodar como PROD

> `sudo docker build -t task-crud:v1 .`
> `sudo docker run task-crud:v1`

Ou use o docker compose para rodar como DEV

> `sudo docker-compose up`

## _Terminal_

Utilize os seguintes comandos para rodar como PROD

> `yarn`
> `yarn build`
> `yarn start`

Ou use o docker compose para rodar como DEV

> `yarn`
> `yarn dev`

é necessário que haja um .ENV (Veja o exemplo na pasta raiz)
