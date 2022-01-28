import React, { useState, useEffect } from "react";

function Recipes() {
  const [recipe, setRecipe] = useState({});

  async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    }); // parses JSON response into native JavaScript
    console.log(response);

    return response;
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getData("/recipes")
      .then((response) => {
        console.log(response);

        return response.json();
      })
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setRecipe(data);
        console.log(data);
      });
    // const fetchData = async () => {
    //   const result = await getData("http://localhost:3001/recipes");
    //   console.log(result.resultSet);

    //   setRecipe(result);
    // };

    // fetchData();
  }, []);

  return <div>{recipe.map}</div>;
}

export default Recipes;
