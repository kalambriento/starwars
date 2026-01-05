import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";
import { getPlanetList } from "../swapiFetch";

const MOCK_IMG_SRC = "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg";

const IMAGE_MAP = {
    "Tatooine":
      "https://cdnb.artstation.com/p/assets/images/images/081/993/507/large/darth-vader-666-2.jpg?1731788802",
    "Alderaan":
      "https://cdnb.artstation.com/p/assets/images/images/067/039/503/large/jose-mikhail-alderak-03.jpg?1694417283",
    "Yavin IV":
      "https://www.giantbomb.com/a/uploads/scale_super/4/41342/1087577-starwars_article_sw20040812yavin4_pic1_en.jpg",
    "Hoth":
      "https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest/scale-to-width-down/1000?cb=20170802030704",
    "Dagobah":
      "https://static.wikia.nocookie.net/starwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20070422150941&path-prefix=pl",
    "Bespin":
      "https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537",
    "Endor":
      "https://static.wikia.nocookie.net/lucasfilm/images/d/d4/PlanetEndor.jpg/revision/latest?cb=20131001175332",
    "Naboo":
      "https://static.wikia.nocookie.net/swfanon/images/5/50/Naboo.jpg/revision/latest?cb=20150530125416&path-prefix=de",
    "Coruscant":
      "https://i.imgur.com/CLCAdu4.jpg",
    "Kamino":
      "https://swrpggm.com/wp-content/uploads/2021/04/Kamino_FE.png",

};

export const Planet = () => {
  const { store, dispatch } = useGlobalReducer();

  const updateData = async () => {
    const planetList = await getPlanetList();
    dispatch({ type: "update_planetList", payload: planetList });
  };

  useEffect(() => {
    if (store.planetList.length === 0) {
      updateData();
    }
  }, []);

  return (
    <>
      <h2>Planets</h2>

      <div className="d-flex flex-nowrap overflow-auto gap-3 py-5">
        {store.planetList.map((planet) => (
          <Card
            key={planet.uid}
            name={planet.name}
            category="planet"
            itemId={planet.uid}
            imageSrc={IMAGE_MAP[planet.name] || MOCK_IMG_SRC}
            onFavorite={() =>
              dispatch({
                type: "add_favorite",
                payload: {
                  name: planet.name,
                  category: "planet",
                },
              })
            }
          />
        ))}
      </div>
    </>
  );
};