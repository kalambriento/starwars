import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
export const Favorites = () => {
  const { store, dispatch } = useGlobalReducer();

  const favorites = store.favoriteList || [];

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites ({favorites.length})
        </button>

        <ul className="dropdown-menu">
          {favorites.map((item, index) => (
            <li key={item.name || index}>
              <a className="dropdown-item" href="#">
                {item.name || item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
