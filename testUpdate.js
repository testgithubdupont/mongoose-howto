import mongoose from "mongoose";
import UE from "./model/UE.js";

mongoose.connect("mongodb://127.0.0.1:27017/licence");

// Find a single blog post
const firstUE = await UE.findOne({});
console.log(`before update:\t name=${firstUE.name}`);

firstUE.name = "introduction à l'algo";
await firstUE.save();
console.log(`After update:\t name=${firstUE.name}`);
