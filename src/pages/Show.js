import { useLoaderData } from "react-router-dom";

function Show(props) {
  const oneCheeseLoader = useLoaderData();

  return (
    <div className="oneCheese">
      <h1>{oneCheeseLoader.name}</h1>
      <img src={oneCheeseLoader.image} alt={oneCheeseLoader.name} />
      <h2>{oneCheeseLoader.countryOfOrigin}</h2>
    </div>
  );
}

export default Show;
