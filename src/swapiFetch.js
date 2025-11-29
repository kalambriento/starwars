const SWAPI_URL = "https://www.swapi.tech/api/";

export const getCharacterList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}people`);
  const data = await httpResponse.json();
  return data.results;
};

export const getPlanetList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}planets`);
  const data = await httpResponse.json();
  return data.results;
};

export const getVehicleList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}vehicles`);
  const data = await httpResponse.json();
  return data.results;
};
