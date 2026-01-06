import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";
import { getVehicleList } from "../swapiFetch";

const MOCK_IMG_SRC = "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg";

const IMAGE_MAP = {
  "Sand Crawler":
      "https://static.wikia.nocookie.net/starwars/images/3/3b/Swapmeet.jpg/revision/latest/scale-to-width-down/1000?cb=20111001150512",
    "X-34 landspeeder":
      "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819",
    "T-16 skyhopper":
      "https://static.wikia.nocookie.net/swse/images/2/22/T-16_Skyhopper.jpg/revision/latest?cb=20220406211641",
    "TIE/LN starfighter":
      "https://fractalsponge.net/gallery/Starfighters/TIE%20Fighter/tf13.jpg",
    "Snowspeeder":
      "https://preview.redd.it/4tzde0thij071.jpg?width=640&crop=smart&auto=webp&s=f914bd9e9ef752d84faa3f97b5d96319e332694a",
    "AT-AT":
      "https://preview.redd.it/do-you-think-the-at-at-was-partially-inspired-by-the-v0-8742hut260p81.jpg?width=640&crop=smart&auto=webp&s=3ba28c00ff2ae2a0ecab8801d0fc5f8611603874",
    "TIE bomber":
      "https://static.wikia.nocookie.net/esstarwars/images/1/17/TIE_Bomber_BF2.png/revision/latest?cb=20171101030957",
    "AT-ST":
      "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802",
    "Storm IV Twin-Pod cloud car":
      "https://static.wikia.nocookie.net/0ff7b4c4-9904-4624-870e-ad2bb168d891",
    "Sail barge":
      "https://static.wikia.nocookie.net/starwars/images/d/d4/Sailbarge-chron2.jpg/revision/latest/scale-to-width-down/1000?cb=20091202162508",

};

export const Vehicle = () => {
  const { store, dispatch } = useGlobalReducer();

  const updateData = async () => {
    const vehicleList = await getVehicleList();
    dispatch({ type: "update_vehicleList", payload: vehicleList });
  };

  useEffect(() => {
    if (store.vehicleList.length === 0) {
      updateData();
    }
  }, []);

  return (
    <>
      <h2>Vehicles</h2>

      <div className="d-flex flex-nowrap overflow-auto gap-3 py-5">
        {store.vehicleList.map((vehicle) => (
          <Card
            key={vehicle.uid}
            name={vehicle.name}
            category="vehicle"
            itemId={vehicle.uid}
            imageSrc={IMAGE_MAP[vehicle.name] || MOCK_IMG_SRC}
            onFavorite={() =>
              dispatch({
                type: "add_favorite",
                payload: {
                  id: vehicle.uid,
                  name: vehicle.name,
                  category: "vehicle",
                },
              })
            }
          />
        ))}
      </div>
    </>
  );
};