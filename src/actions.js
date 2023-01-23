import { redirect } from "react-router-dom";

const URL = "http://localhost:4000";

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData();
  // set up our new person to match schema
  const newCheese = {
    name: formData.get("name"),
    image: formData.get("image"),
    countryOfOrigin: formData.get("countryOfOrigin"),
  };
  // Send new person to our API
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
