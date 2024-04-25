import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const ue = new Schema({
  name: String,
  teacher: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  students: [
    {
      student: {
        type: SchemaTypes.ObjectId,
        ref: "User",
      },
      mark: Number,
    },
  ],
});

const UE = model("UE", ue);
export default UE;
