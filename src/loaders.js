const URL = "https://cheeseapp-backend-u8y7.onrender.com";

export const cheeseLoader = async () => {
  const response = await fetch(URL + "/cheese");
  const cheese = await response.json();
  return cheese;
};
