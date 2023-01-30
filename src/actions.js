import { redirect } from "react-router-dom";

const URL = "https://cheeseapp-backend-u8y7.onrender.com";

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData();
  // set up our new Cheese to match schema
  const newCheese = {
    name: formData.get("name"),
    image: formData.get("image"),
    countryOfOrigin: formData.get("countryOfOrigin"),
  };
  // Send new cheese to our API
  await fetch(URL + "/cheese", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCheese),
  });
  // redirect to index
  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  // get data from form
  const formData = await request.formData();
  // set up our new person to match schema
  const updatedCheese = {
    name: formData.get("name"),
    image: formData.get("image"),
    title: formData.get("countryOfOrigin"),
  };
  // Send new cheese to our API
  await fetch(URL + "/cheese/" + params.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCheese),
  });
  // redirect to index
  return redirect("/");
};
