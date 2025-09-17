import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { handleGetFavorites } from "./api/favourite/favourite";

function App() {
  useEffect(() => {
    (async () => {
      const favorites = await handleGetFavorites();
      console.log("Favorites:", favorites);
    })();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
