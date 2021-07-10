# Queries ejecutadas en el curso en GraphiQL

## Alias y Fragments

```graphql
{
  AllCourses: getCourses{
    ...CourseFields
  }

  Course1: getCourse(id: "5cb4b8ce75f954a0585f7be2"){
    ...CourseFields
    teacher
  }

  Course2: getCourse(id: "5cb4b8ce75f954a0585f7be4"){
    ...CourseFields
    topic
  }
}

fragment CourseFields on Course {
  _id
  title
  description
  people {
    _id
    name
  }
}
```

## Variables

```graphql
query GetCourse2 ($course: ID!) {
  getCourse(id: $course){
   _id
    title
    people{
      _id
      name
    }
  }
}
```
Requiere un objeto JSON como:

```json
{
  "course": "60dd27fb65eb85d98afcad53"
}
```

## Usando Enums
```graphql
mutation CreateNewCourse($createInput: CourseInput!) {
  createCourse(input: $createInput) {
    _id
    title
  }
}
```

Variables

```json
{
  "createInput": {
    "title": "Mi titulo 4",
    "teacher": "Monkey D. Garp",
    "description": "Historia del incidente de God valley",
    "topic": "Historia de Marina",
    "level": "Avanzado"
  }
}
```

## Query con interface
```graphql
{
  getPeople{
    _id
    name
    email
    ... on Monitor{
      phone
    }
  }
}
```

## Directiva
```graphql
query getPeopleData($monitor: Boolean!, $avatar: Boolean!){
  getPeople{
    _id
    name
    ... on Monitor @include(if: $monitor){
      phone
    }
    ... on Student @include(if: $avatar){
      avatar
      email
    }
  }
}
```

```json
{
  "monitor": false,
  "avatar": true
}
```

## Unions
```graphql
{
  searchItems(keyword: "1"){
    __typename
    ... on Course{
      title
      description
    }
    ... on Monitor{
      name
      phone
    }
    ... on Student{
      name
      email
    }
  }
}
```



