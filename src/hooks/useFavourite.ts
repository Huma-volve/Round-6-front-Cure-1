// hooks/useFavourites.ts
import { useEffect, useState } from "react";
import {
  handleAddFavorite,
  handleGetFavorites,
  handleRemoveFavorite,
} from "@/api/favourite/favourite";

export function useFavourites() {
  const [favouritesIDs, setFavouritesIDs] = useState<number[]>([]);
  const [AllFavourites, setAllFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFavourites = async () => {
    try {
      setLoading(true);
      const res = await handleGetFavorites();
      setAllFavourites(res.data);
      setFavouritesIDs(
        res.data.map(
          (f: { favouritable: { doctor_profile: { id: number } } }) =>
            f.favouritable.doctor_profile.id
        )
      );
      setLoading(false);
    } catch (error) {
      console.error("Fetch favourites error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  const toggleFavourite = async (doctorId: number) => {
    if (favouritesIDs.includes(doctorId)) {
      await handleRemoveFavorite(doctorId.toString());
      await fetchFavourites();
      setFavouritesIDs((prev) => prev.filter((id) => id !== doctorId));
    } else {
      await handleAddFavorite(doctorId.toString());
      await fetchFavourites();
      setFavouritesIDs((prev) => [...prev, doctorId]);
    }
  };

  return { favouritesIDs, toggleFavourite, AllFavourites, loading };
}
