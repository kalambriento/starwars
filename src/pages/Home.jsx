import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card";
import { useEffect } from "react";
import { getCharacterList } from "../swapiFetch.js";

const MOCK_IMG_SRC =
  "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const updateData = async () => {
    const characterList = await getCharacterList();
    dispatch({ type: "update_character_list", payload: characterList });
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      Home
      {store.characterList.map((character) => (
        <Card imgURL={MOCK_IMG_SRC} title={character.name}>
          <ul>
            <li>eye color: blue</li>
            <li>hair Color: green</li>
            <li>size: 6feet</li>
          </ul>
        </Card>
      ))}
    </>
  );
};
