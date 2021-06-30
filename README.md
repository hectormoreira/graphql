# GraphQl Notas
Notas del [Curso Básico de GraphQL](https://platzi.com/clases/graphql/)

## Schema
El Schema es la base de una API en GraphQL, es el encargado de describir todos los tipos de información que va a contener.

Dentro de GraphQL contamos con distintos tipos de datos escalares:

- String
- Int
- Float
- Boolean
- ID

## Querys y Resolvers
Una query permite ejecutar una petición al API, dentro de una query debes indicar la consulta que quieres ejecutar y los campos que deseas obtener. GraphQL te va a devolver la información que solicitaste dentro del objeto data.

El resultado de tu petición no se va a ejecutar de manera mágica, para ello debes definir el objeto resolvers, este objeto va a contener una propiedad del mismo nombre que la query que va a resolver o ejecutar.

## Sirviendo el API en la web
Dependencias de express y un middleware de GraphQL, vamos a instalarlo con el siguiente comando:

```sh
npm i express express-graphql
```
Para evitar el proceso de detener nuestro servidor cada que ejecutamos un nuevo cambio vamos a utilizar la dependencia de desarrollo Nodemon:

```sh
npm i nodemon -D
```