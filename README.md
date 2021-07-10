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
## Errores
Si sucede un error al momento de realizar una petición GraphQL nos va a retornar un objeto llamado errors que contendrá la información del error y su mensaje. Podemos configurar el mensaje que le retorne al usuario simplemente con una función que lance un error con el mensaje que queramos.

## Alias y fragments
Dentro de GraphQL podemos correr más de una petición a la vez y nombrarlas de distinta manera para poder identificarlas, esto es posible gracias a los `Aliases` o simplemente `Alias`.

La sintaxis de un `Alias` es bastante simple:

```graphql
nombreDelAlias: tipoDeDato(argumento: tipo) {
  datos
}

# En vivo
{
  AllCourses: getCourses{
    ...CourseFields
  }
  
  Course1: getCourse(id: "60dd27fb65eb85d98afcad52"){
    ...CourseFields
    teacher
  }
  
  Course2: getCourse(id: "60dd27fb65eb85d98afcad53"){
    ...CourseFields
    topic
  }
}

fragment CourseFields on Course {
  _id
  title
  description
  people{
    _id
    name
  }
}
```

Además de los Alias, podemos agrupar campos para ser reutilizados en distintas peticiones gracias a los `Fragments`.



## Variables
Podemos utilizar variables dentro de las peticiones que hagamos a GraphQL simplemente definiéndolas con la siguiente sintaxis:

```graphql
$nombre: tipo
```

## Tipo Enums
Los `Enums` o enumeration types son tipos de datos escalares cuyos valores son configurables. Si definimos un tipo de dato como enum sus valores posibles solamente serán aquellos que se encuentren entre los definidos en el enum.

## Interfaces - Tipo Monitor
Las interfaces son muy importantes y útiles cuando nos encontramos con tipos de datos similares. Una interfaz nos permite definir un tipo de dato padre que utilizando la palabra `implements` va a implementar los campos que tenga definidos dentro del tipo de dato que queramos.

## Directivas
Las directivas son una instrucción que permite agregar condicionales a nuestras peticiones. Podemos modificar de manera dinámica nuestra query simplemente añadiendo:

```graphql
@include(if: Boolean) {
  datos
}
```
## Deprecado
Se agrega `@deprecated` al schema

```graphql
type Course {
  _id: ID!
  title: String!
  teacher: String
  description: String!
  topic: String @deprecated
  people: [Student]
  level: Level
}
```

## Unions
Unions permite agrupar varios custom types sin importar si tienen algo en común, su sintaxis es la siguiente:

```graphql
union SearchResult = CustomType1 | CustomType2 | CustomType3
```

Al momento de realizar una query que retorna una union podemos identificar el tipo de dato solicitando el campo `__typename`.

Crear indice `db.courses.createIndex({"$**": "text"})`

## Preparando API para producción
Para que nuestra API sea accesible desde cualquier lugar debemos añadir el middleware cors a express, primero debemos instalarlo con el siguiente comando: `npm i cors`

## Clientes de GraphQl
- [FetchQl](https://www.npmjs.com/package/fetchql)
Tiene un objeto de configuración donde se introduce todas los requerimientos que necesita un query.

- [Graphql-request](https://www.npmjs.com/package/graphql-request)
Se puede usar tanto en node como en un aplicativo de front. Es el más sencillo de usar.

- [Apollo Client](https://www.npmjs.com/package/apollo-client)
En un cliente muy completo pues tiene los mismos usos que graphql-request, pero se puede manejar caché de query, uso de promesas, entre otros.

- [Relay](https://relay.dev/)
Es un cliente orientado a integrar el front. es usado por Facebook de manera oficial para conectar con graphql.

- [Vue Apollo](https://apollo.vuejs.org/)

- [Apollo Angular](https://www.apollographql.com/docs/angular/)


## Recursos
- [MLAB](https://mlab.com/)
- [Learn Queries/](https://graphql.org/learn/queries/)

### Dependencias

```sh
npm i mongodb
npm i cors
```



