import React from "react";
import { StyledAnimalCard } from "../../globalStyles";

// interface
interface Props {
  country: string;
  description: string;
  image: string;
  name: string;
  year: string;
}

const AnimalCard: React.FC<Props> = ({
  country,
  description,
  image,
  name,
  year,
}) => {
  return (
    <StyledAnimalCard>
      <h2>{name}</h2>
      <h3>{country}</h3>
      <h4>
        Extinct since <span>{year}</span>
      </h4>
      <p>{description}</p>
      <img src={image} alt="" />
    </StyledAnimalCard>
  );
};

export default AnimalCard;
