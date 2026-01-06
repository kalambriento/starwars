import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";



export const Card = ({ imageSrc, name, onFavorite, category, itemId }) => {
  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favoriteList.some(
    (item) => item.id === itemId
  );

  return (
    <>
      <div className="card" style={{ minWidth: "18rem" }}>
        <img
          src={imageSrc}
          alt={name}
          className="card-img-top"
          style={{
            height: "200px",
            objectFit: "cover"
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <div className="d-flex justify-content-between">
            <Link
              to={`/single/${category}/${itemId}`}
              className="btn btn-primary"
            >
              Ver Más
            </Link>

            <button
              className="btn btn-outline-warning"
              onClick={() => {
                if (isFavorite) {
                  console.log("REMOVE FAVORITE:", name);
                  dispatch({
                    type: "remove_favorite",
                    payload: { id: itemId },
                  });
                } else {
                  console.log("ADD FAVORITE:", name);
                  onFavorite && onFavorite();
                }
              }}
            >
              <i
                className={
                  isFavorite
                    ? "fa-solid fa-bookmark"
                    : "fa-regular fa-bookmark"
                }
              ></i>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};
