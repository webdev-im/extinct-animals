import styled from "styled-components";

// background
import background from "./assets/images/background.jpg";

//! app
export const StyledApp = styled.div`
  background-image: url(${background});
  background-position: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

//! header
export const StyledHeader = styled.header`
  height: 7vh;
  width: 100%;
  position: relative;
  transition-duration: 0.5s;
  background: -webkit-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5)
  );


    .nav-links img {
      height: 4rem;
      border-radius: 50%;
      margin: 0;
    }
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: space-between;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    height: 100%;
  }

  .nav-container a h5{
  font-size: 2rem;
    
    font-family: "The Nautigal", cursive;
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }


  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-menu .nav-item {
    color: #ffffff;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .border-bottom {
    border-bottom: 0.5rem solid purple;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 2rem;
    text-decoration: none;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: transparent;
    transition: width 0.4s ease, background-color 0.4s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: #797979;
  }

  .nav-item .active {
    color: #4e4e4e;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
    height: 30%;
  }

  .nav-icon img {
    height: 2.5rem;
  }

  .nav-container > .nav-links > img {
    height: 4rem;
  }

  /* 1080 */
  @media screen and (max-width: 1920px) {
    .nav-container > .nav-links > img {
      height: 3rem;
    }
    .nav-menu .nav-item {
    font-size: 0.8rem;
    }
  }

  // 720 screen
  @media screen and (max-width: 1366px) {
    .slide {
      h3 {
        font-family: "Parisienne", cursive;
        color: #c49b63;
        font-size: 2rem;
      }
      h1 {
        text-transform: uppercase;
        width: 30%;
        text-align: center;
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
        width: 40%;
        text-align: center;
      }
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 2.5rem;
    }

    .nav-item {
      font-size: 1rem;
    }
  }

  // tablet
  @media screen and (max-width: 812px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: absolute;
      top: 101%;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
      background-color: rgba(240, 240, 240, 0.4);
      z-index: 6;
      padding-bottom: 2rem;
    }

    .nav-menu.active {
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      padding-top: 1rem;
    }
    .nav-item .active {
      color: #ffdd40;
      border: none;
    }
    .nav-links {
      width: 100%;
      display: flex;
    }

    .nav-container a  {
      margin-left: 1.2rem;
    }
    .nav-item {
      font-size: 1.2rem;
      margin: 0;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      margin-top: 0.4rem;
    }

    .nav-icon img {
      height: 2.4rem;
    }

    .slide {
      padding: 15% 0;
      h3 {
        font-size: 2rem;
      }
      h1 {
        width: 60%;

        font-size: 2rem;
      }
      p {
        font-size: 1rem;
        width: 70%;
      }
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 3.4rem;
    }
  }

  // mobile
  @media screen and (max-width: 415px) {

    .nav-container .nav-links h5 {
      font-size: 1.4rem;
    }
    .nav-icon {
      height: 30%;
    }
    .slide {
      padding: 20% 0 15% 0;
      h3 {
        font-size: 2rem;
      }
      h1 {
        width: 70%;

        font-size: 1.7rem;
      }
      p {
        font-size: 1rem;
        width: 80%;
      }
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 2.5rem;
    }
  }

  .nav-icon img {
    height: 1.8rem;
  }

  .logo {
    height: 2rem;
    padding-left:1rem;
    filter: invert(15%) sepia(74%) saturate(3477%) hue-rotate(355deg)
      brightness(92%) contrast(99%);
  }

  .nav-container a  {
      margin-left: 1rem;
    }

  // small mobile
  @media screen and (max-width: 378px) {
    .nav-menu {
      top: 102%;
    }
    .nav-icon {
      height: 8%;
    }

    .nav-links {
      padding: 0.9rem;
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 2rem;
    }
  }
`;

//! footer
export const StyledFooter = styled.footer`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5)
  );
  color: gray;
`;

//! app
export const StyledLoader = styled.img`
  filter: invert(40%) sepia(37%) saturate(4072%) hue-rotate(185deg)
    brightness(92%) contrast(94%);
`;

//! screens
//! home screen
export const StyledHomeScreen = styled.main`
  min-height: 88vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  h1 {
    position: absolute;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.1);
    top: 7%;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

//! single screen
export const StyledSingleAnimalScreen = styled.main`
  min-height: 88vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  h1 {
    position: absolute;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.1);
    top: 7%;
  }
  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

//! post an animal screen
export const StyledPostAnimalScreen = styled.main`
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    position: absolute;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.1);
    top: 35%;
    left: 1%;
  }
`;

//! atoms

//! button
export const StyledButton = styled.button`
  width: 10rem;
  height: 2rem;
  cursor: pointer;
  background-color: #fd9104;
  border-radius: 0.5rem;
  :hover {
    background-color: gray;
  }
`;

//! input
export const StyledInput = styled.input`
  width: 90%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
  padding-left: 1rem;
  margin-top: 0.5rem;
`;

//! textarea
export const StyledTextarea = styled.textarea`
  height: 10rem;
  width: 90%;
  border-radius: 0.5rem;
  border: 1px solid gray;
  padding-left: 1rem;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  font-family: Roboto;
  font-size: 0.8rem;
`;

//! molecules
export const StyledForm = styled.form`
  height: 40rem;
  width: 30rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: 3px solid rgba(0, 0, 0, 0.5);
  color: #fd9104;
  border-radius: 2%;
  background-color: rgba(255, 255, 255, 0.2);
  .single__input {
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
`;

//! animal card
export const StyledAnimalCard = styled.div`
  width: 40rem;
  height: 29rem;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  border-radius: 0.5rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1rem;
  padding-bottom: 5rem;
  h3 {
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-size: 1.4rem;
  }
  h2 {
    color: #fd9104;
  }
  p {
    text-align: justify;
  }
  img {
    height: 16rem;
    width: auto;
    object-fit: contain;
    border-radius: 0.5rem;
    position: absolute;
    top: 68%;
  }
  h4 span {
    color: #ffc916;
  }
`;

//! table
export const StyledTable = styled.table`
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
  tr {
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    :hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }

  td {
    width: 17rem;
  }

  td:nth-child(2) {
    color: #fd9104;
    font-weight: 600;
    font-size: 1.2rem;
  }

  td:nth-child(3) {
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-size: 1.4rem;
  }

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
`;
