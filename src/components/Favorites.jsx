const favoriteList = ["Gustavo", "kilian", "Pepito"];
export const Favorites = () => {
  return (
    <>
      <div className="dropdown">
        <a
          className="btn btn-primary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </a>

        <ul className="dropdown-menu">
          {favoriteList.map((item) => (
            <li>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
