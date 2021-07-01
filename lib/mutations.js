"use strict";

const { ObjectID } = require("mongodb");
const connectDb = require("./db");

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: "",
      topic: "",
    };

    const newCourse = Object.assign(defaults, input);
    let db, course;
    try {
      db = await connectDb();
      course = await db.collection("courses").insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.error(error);
    }
    return newCourse;
  },

  createStudent: async (root, { input }) => {
    let db, student;
    try {
      db = await connectDb();
      student = await db.collection("students").insertOne(input);
      input._id = student.insertedId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },

  editCourse: async (root, { _id, input }) => {
    let db, course;
    try {
      db = await connectDb();
      await db
        .collection("courses")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      course = await db.collection("courses").findOne({ _id: ObjectID(_id) });
    } catch (error) {
      console.error(error);
    }
    return course;
  },

  editStudent: async (root, { _id, input }) => {
    let db, student;
    try {
      db = await connectDb();
      await db
        .collection("students")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      student = await db.collection("students").findOne({ _id: ObjectID(_id) });
    } catch (error) {
      console.error(error);
    }
    return student;
  },
};