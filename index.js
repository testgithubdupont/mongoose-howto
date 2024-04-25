import mongoose from "mongoose";
import UE from "./model/UE.js";
import User from "./model/User.js";

mongoose.connect("mongodb://127.0.0.1:27017/licence");

const stud1 = await User.create({
  name: "Stud_1",
});

const stud2 = await User.create({
  name: "Stud_2",
});

const teacher_L1 = await User.create({
  name: "Dupont",
  email: "dupont@univ.fr",
});

// Create a new UE and insert into database
const python = await UE.create({
  name: "Python",
  teacher: teacher_L1._id,
  students: [
    { student: stud1._id, mark: 15 },
    { student: stud2._id, mark: 17 },
  ],
});

const p = await UE.findOne({ name: "Python" }).populate("students.student");

console.log(p.students);
// for (let { student } of p.students) {
//   console.log(student.name);
// }
// const sum = p.students.reduce((sum, { mark }) => sum + mark, 0);

// console.log(`la moyenne est de ${sum / p.students.length}`);
