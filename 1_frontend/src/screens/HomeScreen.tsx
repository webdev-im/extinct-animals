import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import { StyledHomeScreen } from "../globalStyles";
import { Link } from "react-router-dom";
import { StyledTable } from "../globalStyles";
import Button from "../components/atoms/Button";

// endpoint
const ANIMALS_API = "https://extinct-animals-app.herokuapp.com/api/animals";

const HomeScreen = () => {
  // hooks
  // state
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(ANIMALS_API).then((res) => setData(res.data));
  }, []);

  return (
    <StyledHomeScreen>
      <h1>Extinct animals</h1>
      <div className="cards">
        <StyledTable>
          {data.map((item) => (
            <Link to={`/single-animal/${item._id}`} key={item._id}>
              <tr>
                <td>
                  <img src={item.animalImage} alt="animal" />
                </td>
                <td>{item.animalName}</td>
                <td>{item.animalCountry}</td>
              </tr>
            </Link>
          ))}
        </StyledTable>
      </div>
      <Link to={`/post-animal`}>
        <Button
          onClick={() => console.log("")}
          text="Post your animal"
          type="submit"
        />
      </Link>
    </StyledHomeScreen>
  );
};

export default HomeScreen;
