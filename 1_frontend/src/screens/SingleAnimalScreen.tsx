import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// style
import { StyledSingleAnimalScreen } from "../globalStyles";
import AnimalCard from "../components/molecules/AnimalCard";

// endpoint
const ANIMALS_API = "https://extinct-animals-app.herokuapp.com/api/animals/";

const HomeScreen = () => {
  // hooks
  // state
  const [data, setData] = useState<any>();

  // variables
  // get dynamic selected id
  const { id } = useParams();

  useEffect(() => {
    axios.get(ANIMALS_API + id).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <StyledSingleAnimalScreen>
      <h1>Details...</h1>
      <div className="cards">
        {!data ? (
          <p>...Loading</p>
        ) : (
          <AnimalCard
            key={data._id}
            name={data.animalName}
            country={data.animalCountry}
            image={data.animalImage}
            description={data.animalDescription}
            year={data.extinctionDate}
          />
        )}
      </div>
    </StyledSingleAnimalScreen>
  );
};

export default HomeScreen;
