import React, { useState } from "react";
import axios from "axios";

// components
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Textarea from "../atoms/Textarea";

// style
import { StyledForm } from "../../globalStyles";

// endpoint
const ANIMALS_ENDPOINT =
  "https://extinct-animals-app.herokuapp.com/api/animals";

const SignupForm = () => {
  // hooks
  // state
  const [animalName, setAnimalName] = useState("");
  const [animalCountry, setAnimalCountry] = useState("");
  const [extinctionDate, setExtinctionDate] = useState("");
  const [animalImage, setAnimalImage] = useState("");
  const [animalDescription, setAnimalDescription] = useState("");

  // creating new animal
  const newAnimal = {
    animalName: animalName,
    animalCountry: animalCountry,
    extinctionDate: extinctionDate,
    animalImage: animalImage,
    animalDescription: animalDescription,
  };

  // custom functions
  const postNewAnimal = async (e: any) => {
    e.preventDefault();

    // sending new user
    setAnimalName("");
    setAnimalCountry("");
    setExtinctionDate("");
    setAnimalImage("");
    setAnimalDescription("");

    const response = await axios.post(ANIMALS_ENDPOINT, newAnimal);

    // navigate("/home");
  };

  return (
    <StyledForm onSubmit={postNewAnimal}>
      <div className="single__input">
        <Label label="Animal name" />
        <Input
          id="animalCountry"
          onInput={(e: any) => setAnimalName(e.target.value)}
          placeholder="Enter animal name"
          type="text"
          value={animalName}
        />
      </div>
      <div className="single__input">
        <Label label="Animal country" />
        <Input
          id="animalCountry"
          onInput={(e: any) => setAnimalCountry(e.target.value)}
          placeholder="Enter animal's country of origin"
          type="text"
          value={animalCountry}
        />
      </div>
      <div className="single__input">
        <Label label="Animal extinction date" />
        <Input
          id="extinctionDate"
          onInput={(e: any) => setExtinctionDate(e.target.value)}
          placeholder="Enter animal's extinction date"
          type="text"
          value={extinctionDate}
        />
      </div>
      <div className="single__input">
        <Label label="Animal image" />
        <Input
          id="animalImage"
          onInput={(e: any) => setAnimalImage(e.target.value)}
          placeholder="Paste image URL"
          type="text"
          value={animalImage}
        />
      </div>
      <div className="single__input">
        <Label label="Animal description" />
        <Textarea
          id="animalDescription"
          onInput={(e: any) => setAnimalDescription(e.target.value)}
          placeholder="Enter description..."
          value={animalDescription}
        />
      </div>
      <Button
        onClick={() => console.log("Data Sent")}
        text="Post Animal"
        type="submit"
      />
    </StyledForm>
  );
};

export default SignupForm;
