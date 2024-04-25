import mongoose from "mongoose";
import UE from "./model/UE.js";

mongoose.connect("mongodb://127.0.0.1:27017/licence");

// Find a UE
const python = await UE.where("name").equals("Python");
console.log(python);

//find multi UE
// const t = await UE.where("name").in(["Python", "Algo"]);
// console.log(t);

// const t = await UE.find().or([{ name: "Python" }, { name: "Algo" }]);
// console.log(t);

// const t = await UE.find({ $or: [{ name: "Python" }, { name: "Algo" }] });
// console.log(t);
