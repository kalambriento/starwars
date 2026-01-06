const SWAPI_URL = "https://www.swapi.tech/api/";



export const getCharacterList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}people`);

  if (!httpResponse.ok) {
    const text = await httpResponse.text();
    throw new Error(text);
  }

  const data = await httpResponse.json();
  const characterListSimple = data.results;

  const detailPromises = characterListSimple.map(async (character) => {
    const detailResponse = await fetch(character.url);

    if (!detailResponse.ok) {
      const text = await detailResponse.text();
      throw new Error(text);
    }

    const detailData = await detailResponse.json();

    return {
      itemId: detailData.result.uid,
      ...detailData.result.properties,
    };
  });

  return Promise.all(detailPromises);
};




export const getPlanetList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}planets`);

  if (!httpResponse.ok) {
    const text = await httpResponse.text();
    throw new Error(text);
  }

  const data = await httpResponse.json();
  return data.results;
};




export const getVehicleList = async () => {
  const httpResponse = await fetch(`${SWAPI_URL}vehicles`);

  if (!httpResponse.ok) {
    const text = await httpResponse.text();
    throw new Error(text);
  }

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
  if (!endpoint || !itemId) return null;

  const cleanId = itemId.toString().split("-").pop();

  const response = await fetch(`${SWAPI_URL}${endpoint}/${cleanId}`);

  if (!response.ok) {
    console.warn("SWAPI error:", response.status);
    return null;
  }

  const data = await response.json();
  return data.result?.properties || null;
};