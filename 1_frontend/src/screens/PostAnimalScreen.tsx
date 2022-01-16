import React from "react";

// components
import PostAnimalForm from "../components/molecules/PostAnimalForm";

// style

import { StyledPostAnimalScreen } from "../globalStyles";

const PostAnimalScreen = () => {
  return (
    <StyledPostAnimalScreen>
      <h1>Post your animal </h1>
      <PostAnimalForm />
    </StyledPostAnimalScreen>
  );
};

export default PostAnimalScreen;
