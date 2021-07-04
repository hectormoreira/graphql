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

## Custom Types 
Para este proyecto vamos a seguir el estándar de estilos Standard, para instalarlo corremos el siguiente comando: `npm i standard -D`

GraphQL nos permite configurar nuestros propios tipos de datos, estos deben tener la siguientes sintaxis:

```js
type <Nombre del tipo> {
  propiedad: Tipo de dato
}
```

Dentro de nuestros tipos de datos podemos configurar un campo de un tipo como obligatorio con el signo "!", quedando por ejemplo:

```js
type Course {
  title: String!
}
```

## Argumentos
Vamos a instalar una nueva dependencia para facilitar el trabajo con GraphQL: `npm i graphql-tools`

Podemos pasar argumentos con distintos tipos de información dentro de las peticiones que hagamos en GraphQL, su sintaxis quedaría de la siguiente manera:

```ts
nombreQuery(campo: tipo): tipo
```

Dentro del resolver los argumentos de la petición pasarían como segundo parámetro, el primero es `root` y el segundo es `args`.

## Configuración de base de datos
Es recomendable almacenar las credenciales de conexión a la base de datos como variables de entorno del sistema y utilizar dotenv para la lectura de dichas credenciales. `npm i dotenv`

## Mutations e Inputs
Un mutation va a requerir de un campo de tipo Input que son como plantillas que le van a indicar qué campos son necesarios para insertar o modificar información.

La sintaxis de una mutation queda de la siguiente manera:
```graphql
nombreMutation(input: InputType): tipo


mutation {
  createCourse(input:{
    title: "Curso de ejemplo 4"
    description: "Descripción 4"
    topic: "Diseño"
  }){
    _id
    title
    description
  }
}


#Create
mutation{
  createStudent(input:{
    name: "Monkey D' Dragon"
    email: "dragon@onepiece.com"
  }){
    _id
    name
    email
  }
}

#edit
mutation{
  editStudent(_id: "60dd35955b8f690ab01855e1", input:{
    name: "Roronoa Zoro"
    email: "zoro@onepiece.com"
  }){
    _id
    name
    email
  }
}
```




### Dependencias

```sh
npm i mongodb
```