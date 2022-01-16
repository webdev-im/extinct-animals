import mongoose from "mongoose";
const { Schema } = mongoose;

const animalSchema = new Schema(
  {
    animalName: {
      type: String,
      required: true,
    },
    animalCountry: {
      type: String,
      required: true,
    },
    extinctionDate: {
      type: String,
      required: true,
    },
    animalImage: {
      type: String,
      required: true,
    },
    animalDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Animal = mongoose.model("Animal", animalSchema);
export default Animal;
