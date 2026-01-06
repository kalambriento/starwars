import { Link, useParams } from "react-router-dom";  
import { useEffect, useState } from "react"
import {
  CHARACTER_IMAGES,
  PLANET_IMAGES,
  VEHICLE_IMAGES,
  FALLBACK_IMAGE,
} from "../utils/imageMaps";
import { getSingleItem } from "../swapiFetch"

export const Single = () => {
  const { category, itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true);

  getSingleItem(category, itemId)
    .then((data) => {
      setItem(data);
    })
    .catch((error) => {
      console.error("Error cargando item:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [category, itemId]);

  if (loading) {
    return <h3 className="text-center mt-5">Cargando...</h3>
  }

  if (!loading && !item) {
    return (
      <div className="container text-center mt-5">
        <h3>Elemento no encontrado</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Volver
        </Link>
      </div>
    );
  }

  const IMAGE_MAP_BY_TYPE = {
    character: CHARACTER_IMAGES,
    planet: PLANET_IMAGES,
    vehicle: VEHICLE_IMAGES,
  };
  
  const imageUrl =
    IMAGE_MAP_BY_TYPE[category]?.[item.name] || FALLBACK_IMAGE;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={imageUrl}
            alt={item.name}
            className="img-fluid rounded"
            style={{
              height: "400px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        
          <div className="col-md-6">
            <h1>{item.name}</h1>
            
            {category === "character" && (
              <>
                <p><strong>Gender:</strong> {item.gender}</p>
                <p><strong>Height:</strong> {item.height}</p>
                <p><strong>Eye color:</strong> {item.eye_color}</p>
                <p><strong>Birth year:</strong> {item.birth_year}</p>
              </>
            )}

            {category === "planet" && (
              <>
                <p><strong>Clima:</strong> {item.climate}</p>
                <p><strong>Terreno:</strong> {item.terrain}</p>
                <p><strong>Población:</strong> {item.population}</p>
              </>
            )}

            {category === "vehicle" && (
              <>
                <p><strong>Modelo:</strong> {item.model}</p>
                <p><strong>Fabricante:</strong> {item.manufacturer}</p>
                <p><strong>Capacidad:</strong> {item.crew}</p>
              </>
            )}
          </div>
        </div>

        <Link to="/" className="btn btn-primary mt-4">
          Volver atrás
        </Link>
      </div>
    );
  };