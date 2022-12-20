import React, { useState } from "react";

const withLoading = (Component) => {
  return ({ loading, ...props }) => {
    const [item, setItem] = useState("##");
    if (loading) {
      return <p>Please wait</p>;
    }
    return <Component {...props} item={item} />;
  };
};

export default withLoading;
