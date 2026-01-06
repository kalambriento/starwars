export const initialStore = () => {
  return {
    todos: [],
    favoriteList: [],
    characterList: [],
    planetList: [],
    vehicleList: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_favorite": {
      // Evitar duplicados
      const exists = store.favoriteList.some(
        (item) => item.id === action.payload.id
      );

      if (exists) return store;

      return {
        ...store,
        favoriteList: [...store.favoriteList, action.payload],
      };
    }

    case "remove_favorite": {
      return {
        ...store,
        favoriteList: store.favoriteList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case "update_characterList":
      return { ...store, characterList: action.payload };

    case "update_planetList":
      return { ...store, planetList: action.payload };

    case "update_vehicleList":
      return { ...store, vehicleList: action.payload };

    default:
      return store; // 🔑 NUNCA lanzar error aquí
  }
}