// hooks/useFavourites.ts
import { useEffect, useState } from "react";
import {
  handleAddFavorite,
  handleGetFavorites,
  handleRemoveFavorite,
} from "@/api/favourite/favourite";

export function useFavourites() {
  const [favouritesIDs, setFavouritesIDs] = useState<number[]>([]);

  const fetchFavourites = async () => {
    try {
      const res = await handleGetFavorites();
      setFavouritesIDs(
        res.map(
          (f: { favouritable: { doctor_profile: { id: number } } }) =>
            f.favouritable.doctor_profile.id
        )
      );
    } catch (error) {
      console.error("Fetch favourites error:", error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  const toggleFavourite = async (doctorId: number) => {
    if (favouritesIDs.includes(doctorId)) {
      await handleRemoveFavorite(doctorId.toString());
      setFavouritesIDs((prev) => prev.filter((id) => id !== doctorId));
    } else {
      await handleAddFavorite(doctorId.toString());
      setFavouritesIDs((prev) => [...prev, doctorId]);
    }
  };

  return { favouritesIDs, toggleFavourite };
}
