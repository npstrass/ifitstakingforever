import React from "react";
import DataFetcher from "./DataFetcher";

function App() {
  const ranNum = Math.floor(Math.random() * 40);
  return (
    <div>
      <DataFetcher url={`https://swapi.dev/api/people/${ranNum}/`}>
        {({ data, loading }) => {
          return loading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>;
        }}
      </DataFetcher>
    </div>
  );
}

export default App;
