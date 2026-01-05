import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Planet } from "./pages/Planet";
import { Vehicle } from "./pages/Vehicle";
import { Single } from "./pages/Single";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found</h1>}>
      <Route element={<Home />} path="/" />
      <Route element={<Character />} path="Character" />
      <Route element={<Planet />} path="Planet" />
      <Route element={<Vehicle />} path="Vehicle" />
      <Route path="single/:category/:itemId" element={<Single />} />
    </Route>
   )
);
