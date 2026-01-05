import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favorites = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="dropdown">
      {/* BOTÓN */}
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Favorites ({store.favoriteList.length})
      </button>

      {/* LISTA */}
      <ul className="dropdown-menu dropdown-menu-end">
        {store.favoriteList.length === 0 ? (
          <li className="dropdown-item text-muted">
            No favorites yet
          </li>
        ) : (
          store.favoriteList.map((item, index) => (
            <li
              key={index}
              className="dropdown-item d-flex justify-content-between align-items-center"
            >
              <span>{item.name}</span>

              <button
                className="btn btn-sm btn-outline-secondary ms-2"
                onClick={() =>
                  dispatch({
                    type: "remove_favorite",
                    payload: { name: item.name },
                  })
                }
              >
                <span style={{ color: "red", fontWeight: "bold" }}>✕</span>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};