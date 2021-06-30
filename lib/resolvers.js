"use strict";

const courses = [
  {
    _id: "1",
    title: "Mi titulo",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programación",
  },
  {
    _id: "2",
    title: "Mi titulo 2",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programación",
  },
  {
    _id: "3",
    title: "Mi titulo 3",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programación",
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
      return course.pop();
    },
  },
};
