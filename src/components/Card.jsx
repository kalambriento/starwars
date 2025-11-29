export const Card = ({ imgURL, title, children }) => {
  return (
    <>
      <div className="card">
        <img src={imgURL} className="card-img-top" alt="Luke Skywalker" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {children}
          <div className="d-flex gap-5">
            <a href="#" className="btn btn-primary me-5">
              Learn more
            </a>
            <a href="like" className="btn btn-primary">
              <i className="fa-regular fa-bookmark"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
