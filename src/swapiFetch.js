const SWAPI_URL = "https://www.swapi.tech/api/";

export const getCharacterList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}people`);
  const data = await httpResponse.json();

  const characterListSimple = data.results;

  const detailPromises = characterListSimple.map(async (character) => {
    const detailResponse = await fetch(character.url);
    const detailData = await detailResponse.json();

    return {
      itemId: detailData.result.uid,
      ...detailData.result.properties,
    };
  });

  const characterListWithDetails = await Promise.all(detailPromises);
  return characterListWithDetails;
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

export const getSingleItem = async (category, itemId) => {
  const endpointMap = {
    character: "people",
    planet: "planets",
    vehicle: "vehicles",
  };

  const endpoint = endpointMap[category];
  if (!endpoint) return null;

  const response = await fetch(`${SWAPI_URL}${endpoint}/${itemId}`);
  const data = await response.json();

  return data.result?.properties || null;
};