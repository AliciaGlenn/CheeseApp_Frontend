import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const oneCheeseLoader = useLoaderData();

  //   return (
  //     <div className="oneCheese">
  //       <h1>{oneCheeseLoader.name}</h1>
  //       <img src={oneCheeseLoader.image} alt={oneCheeseLoader.image} />
  //       <h2>{oneCheeseLoader.countryOfOrigin}</h2>
  //     </div>

  //   );
  // }

  return (
    <div className="oneCheese">
      <h1>{oneCheeseLoader.name}</h1>
      <h2>{oneCheeseLoader.countryOfOrigin}</h2>
      <img src={oneCheeseLoader.image} alt={oneCheeseLoader.image} />

      <h2>Update {oneCheeseLoader.name}</h2>
      <Form action={`/update/${oneCheeseLoader._id}`} method="post">
        <input type="input" name="name" placeholder="cheese name" />
        <input type="input" name="image" placeholder="cheese picture" />
        <input type="input" name="countryOfOrigin" placeholder="Country" />
        <input type="submit" value={`update ${oneCheeseLoader.name}`} />
      </Form>
      <h2>Delete Cheese</h2>
      <Form action={`/delete/${oneCheeseLoader._id}`} method="post">
        <input type="submit" value={`delete ${oneCheeseLoader.name}`} />
      </Form>
    </div>
  );
}

export default Show;
