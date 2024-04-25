import mongoose from "mongoose";
import UE from "./model/UE.js";
import User from "./model/User.js";

mongoose.connect("mongodb://127.0.0.1:27017/licence");

const python = await UE.findOne({ name: "Python" }).populate("teacher");
console.log(python);
