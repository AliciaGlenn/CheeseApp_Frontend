import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
  const cheese = useLoaderData();

  return (
    <div>
      <h2>Add a Type of Cheese</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="Cheese Type" />
        <input type="input" name="image" placeholder="pic of cheese" />
        <input
          type="input"
          name="countryOfOrigin"
          placeholder="Origin of Cheese"
        />
        <input type="submit" value="add cheese" />
      </Form>

      <h2>Cheese</h2>
      {cheese.map((cheese) => (
        <div key={cheese._id} className="cheese">
          <Link to={`/${cheese._id}`}>
            <h1>{cheese.name}</h1>
          </Link>
          <img src={cheese.image} alt={cheese.name} />
          <h3>{cheese.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Index;
