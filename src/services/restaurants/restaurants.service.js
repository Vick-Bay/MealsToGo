import camelize from "camelize";

export const restaurantsRequest = (location) => {
  console.log(location)
  return fetch(
    `http://localhost:5001/mealstogo-d389d/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    console.log(res.json);
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
