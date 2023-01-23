const URL = "https://cheeseapp-backend-u8y7.onrender.com";

export const cheeseLoader = async () => {
  const response = await fetch(URL + "/cheese");
  const cheese = await response.json();
  return cheese;
};

export const oneCheeseLoader = async ({ params }) => {
  const response = await fetch(URL + "/cheese/" + params.id);
  const cheese = await response.json();
  return cheese;
};
