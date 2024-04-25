import mongoose from "mongoose";
import UE from "./model/UE.js";

mongoose.connect("mongodb://127.0.0.1:27017/licence");

//change the value of _id in your code
const python = await UE.findById("662a11ae8a11d2e8300a9a20").exec();
console.log(python);
