const GET = () => {
  return (endpoint, params, fullUrl) => {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((response) => response)
      .catch((e) => {
        return { success: false, message: "error msg" };
      });
  };
};

export { GET };
